import { methods, route, Request, Matched, json } from "chunks";
import { fork } from "core/chunks";
import * as model from "./model";

// when app scales, it could be moved into "controllers" dir
const readAll = ({ db }) => (req: Request) => model.readAll(db).then(json);
const readAllProjects = ({ db }) => (req: Request & Matched) =>
  model.readAllProjects(req.params.id, db).then(json);

// prettier-ignore
export default ({ db }) =>
  fork(
    route("/:id/projects", fork(
      methods("GET", readAllProjects({ db }))
    )),
    route("/", fork(
      methods("GET", readAll({ db })),
    )),
  )

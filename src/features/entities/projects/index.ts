import { methods, route, Request, Matched, json } from "chunks";
import { fork } from "core/chunks";
import * as model from './model';

// when app scales, it could be moved into "controllers" dir
const readAll = ({ db }) => (req: Request) => model.readAll(db).then(json);
const readAllTickets = ({ db }) => (req: Request & Matched) =>
  model.readAllTickets(req.params.id, db).then(json);

// prettier-ignore
export default ({ db }) =>
  fork(
    route("/:id/tickets", fork(
      methods("GET", readAllTickets({ db }))
    )),
    route("/", fork(
      methods("GET", readAll({ db })),
    )),
  )

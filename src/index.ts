const { PORT } = process.env;

import { compose } from "ramda";
import { start, safe, route } from "chunks";
import { fork } from "./core/chunks";
import initDatabase from "./database";
import features from './features';

// prettier-ignore
const app = ({ db }) =>
  compose(safe)(
    fork(
      route("/v1*", features({ db })),
    )
  );

initDatabase().then((db) => start(app({ db }), parseInt(PORT)));

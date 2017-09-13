import { route } from 'chunks';
import { fork } from "core/chunks";
import entities from './entities';

export default ({ db }) => fork(
  route('/entities*', entities({ db })),
)
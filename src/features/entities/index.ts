import { route } from 'chunks';
import { fork } from "core/chunks";
import projects from './projects';
import tickets from './tickets';

export default ({ db }) => fork(
  route('/tickets*', tickets({ db })),
  route('/projects*', projects({ db })),
)
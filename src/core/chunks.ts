import { makeFork, withStatus, json } from 'chunks';

export const fork = makeFork(
  withStatus(404)(
    json({
      message: "Not Found"
    })
  )
);
import { ErrorRequestHandler } from 'express';

const erroHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  _next,
) => {
  console.log(err);
  return res.status(err.code).json({ message: err.message });
};

export default erroHandler;
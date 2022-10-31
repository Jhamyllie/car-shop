import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import CustomErro from './customError';

const erroHandler: ErrorRequestHandler = (
  err: ZodError | CustomErro,
  req,
  res,
  _next,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.issues });
  }
  if (err instanceof CustomErro) {
    return res.status(err.code).json({ message: err.message });
  }
  console.log(err);
  return res.status(500).json({ message: 'Internal error' });
};

export default erroHandler;
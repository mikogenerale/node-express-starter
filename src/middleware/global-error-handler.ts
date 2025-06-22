import type { NextFunction, Request, Response } from 'express';

import type { AppError } from '../errors/AppError';

import env from '../env';

export function globalErrorHandler(
  err: AppError,
  req: Request,
  res: Response,
  _next: NextFunction,
) {
  req.log.error(err.message);
  res.status(err.statusCode)
    .json({
      statusCode: err.statusCode,
      message: err.message,

      stackTrace: env.NODE_ENV === 'production'
        ? undefined
        : err.stack,
    });
}

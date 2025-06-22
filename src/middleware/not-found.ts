import type { NextFunction, Request, Response } from 'express';

import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(StatusCodes.NOT_FOUND)
    .json({
      message: `${StatusCodes.NOT_FOUND} ${ReasonPhrases.NOT_FOUND} - ${req.path}`,
    });

  next();
}

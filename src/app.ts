import type { Request, Response } from 'express';

import express from 'express';

import {
  globalErrorHandler,
  logger,
  notFound,
  openApi,
} from './middleware/index';
import serveEmojiFavicon from './middleware/serve-emoji-favicon';

const app = express();

// OpenApi middleware
app.use(openApi);
app.use('/doc', openApi.swaggerui());

app.use(logger);
app.use(serveEmojiFavicon('🚧'));

app.get(
  '/',
  openApi.generateDocument,
  (_req: Request, res: Response) => {
    res.json({
      message: 'Hello World',
    });
  },
);

// app.get('/error', (_req: Request, _res: Response, next: NextFunction) => {
//   try {
//     throw new AppError(500, 'This is a error test route');
//   }
//   catch (error) {
//     next(error);
//   }
// });

// Not Found Route Fallback middleware
app.use(notFound);
app.use(globalErrorHandler);

export default app;

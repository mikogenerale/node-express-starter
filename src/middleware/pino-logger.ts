import pino from 'pino';
import pinoHttp from 'pino-http';
import pinoPretty from 'pino-pretty';

import env from '../env';

export const logger = pinoHttp({
  logger: pino(
    {
      level: env.LOG_LEVEL,
    },
    env.NODE_ENV !== 'production' ? pinoPretty() : undefined,
  ),

  genReqId: (req, res) => {
    const existingID = req.id ?? req.headers['x-request-id'];
    if (existingID)
      return existingID;

    const id = crypto.randomUUID();
    res.setHeader('X-Request-Id', id);
    return id;
  },

});

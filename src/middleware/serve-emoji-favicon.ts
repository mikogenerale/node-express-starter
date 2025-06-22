import type { NextFunction, Request, Response } from 'express';

function serveEmojiFavicon(emoji: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.path === '/favicon.ico') {
      res.setHeader('Content-Type', 'image/svg+xml');
      res.send(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
           <text y=".9em" x="-0.1em" font-size="90">${emoji}</text>
         </svg>`,
      );
    }
    else {
      next();
    }
  };
}

export default serveEmojiFavicon;

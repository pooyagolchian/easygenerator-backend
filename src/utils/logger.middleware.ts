import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction): void {
    const { ip, method, originalUrl, headers } = req;
    const userAgent = headers['user-agent'] || '';

    res.on('finish', () => {
      const { statusCode, statusMessage } = res;
      const contentLength = res.get('content-length');

      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${statusMessage} ${contentLength} - ${userAgent} ${ip}`,
      );
    });

    next();
  }
}

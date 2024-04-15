import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { renderTemplate } from './indexPageTemplate';

export class NotfoundExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest();
    const res = ctx.getResponse();
    const apiPath = req.originalUrl.split('/')[1];
    // return page directly if the request path is not api
    if (!apiPath || apiPath !== 'api') {
      return res.send(renderTemplate());
    }
    return res.status(404).json({
      message: 'Not Found!'
    })
  }
}

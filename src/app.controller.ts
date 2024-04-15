import { All, Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { renderTemplate } from './common/indexPageTemplate'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @All()
  getIndex(@Res() res: Response) {
    return res.send(renderTemplate());
  }
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NotfoundExceptionFilter } from './common/notfoundErrorFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new NotfoundExceptionFilter());
  await app.listen(3000);
}
bootstrap();

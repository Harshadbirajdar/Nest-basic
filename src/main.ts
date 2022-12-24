import { NestFactory } from '@nestjs/core';
import config from 'config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/v1/api');
  await app.listen(config().PORT);
}
bootstrap();

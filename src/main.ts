import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {env} from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: env.CLIENT_LINK,
  });

  await app.listen(env.HOST_PORT ?? 3000);
}

bootstrap();

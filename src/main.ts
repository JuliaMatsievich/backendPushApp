import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaService);
  app.enableShutdownHooks();
  app.enableCors({
    origin: 'http://localhost:8081', // Allow requests from this domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these methods
    allowedHeaders: 'Content-Type, Authorization', // Allow these headers
    credentials: true, // Allow credentials (cookies, HTTP authentication)
  });
  app.setGlobalPrefix('api');
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
}

bootstrap();

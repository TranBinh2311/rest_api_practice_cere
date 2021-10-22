import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Rest API for Workshop')
  .setVersion('1.0.0')
  .setDescription("Api from pro coder")
  .build()

  const document =  SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('restapi', app, document);

  await app.listen(3000);
}
bootstrap();

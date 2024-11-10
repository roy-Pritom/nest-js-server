import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 4000;  // Fallback to 3000 if PORT is not set
  await app.listen(port);
  
  // Log the port when the application starts
  console.log(`Server running on port = ${port}`);
}
bootstrap();

import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  onModuleInit() {
    // Log the message when the app is initialized
    console.log('Server running on port = 3000');
  }
  getHello(): string {
    return 'Hello World!';
  }
}

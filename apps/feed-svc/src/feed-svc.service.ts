import { Injectable } from '@nestjs/common';

@Injectable()
export class FeedSvcService {
  getHello(): string {
    return 'Hello World!';
  }
}

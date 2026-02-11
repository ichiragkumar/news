import { Injectable } from '@nestjs/common';

@Injectable()
export class IdentitySvcService {
  getHello(): string {
    return 'Hello World!';
  }
}

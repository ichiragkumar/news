import { Controller, Get } from '@nestjs/common';
import { IdentitySvcService } from './identity-svc.service';

@Controller()
export class IdentitySvcController {
  constructor(private readonly identitySvcService: IdentitySvcService) {}

  @Get()
  getHello(): string {
    return this.identitySvcService.getHello();
  }
}

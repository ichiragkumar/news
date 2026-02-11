import { Controller, Get } from '@nestjs/common';
import { FeedSvcService } from './feed-svc.service';

@Controller()
export class FeedSvcController {
  constructor(private readonly feedSvcService: FeedSvcService) {}

  @Get()
  getHello(): string {
    return this.feedSvcService.getHello();
  }
}

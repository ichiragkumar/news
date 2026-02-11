import { Module } from '@nestjs/common';
import { FeedSvcController } from './feed-svc.controller';
import { FeedSvcService } from './feed-svc.service';

@Module({
  imports: [],
  controllers: [FeedSvcController],
  providers: [FeedSvcService],
})
export class FeedSvcModule {}

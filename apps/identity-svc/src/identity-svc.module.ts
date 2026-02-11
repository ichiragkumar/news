import { Module } from '@nestjs/common';
import { IdentitySvcController } from './identity-svc.controller';
import { IdentitySvcService } from './identity-svc.service';

@Module({
  imports: [],
  controllers: [IdentitySvcController],
  providers: [IdentitySvcService],
})
export class IdentitySvcModule {}

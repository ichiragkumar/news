import { NestFactory } from '@nestjs/core';
import { FeedSvcModule } from './feed-svc.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';




async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    FeedSvcModule,
    {
      transport : Transport.GRPC,
      options: {
        package : "feed",
        protoPath : join(process.cwd(), "protos/feed.proto"),
        url : "0.0.0.0:5002"
      }
    }
  )
  await app.listen()
}
bootstrap();

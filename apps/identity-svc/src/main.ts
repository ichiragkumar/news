import { NestFactory } from '@nestjs/core';
import { IdentitySvcModule } from './identity-svc.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    IdentitySvcModule,
    {
      transport : Transport.GRPC,
      options :{
        package: 'identity',
        protoPath :join(process.cwd(), "protos/identity.proto"),
        url: '0.0.0.0:50051',
      }
    }
  )

  await app.listen()
}
bootstrap();

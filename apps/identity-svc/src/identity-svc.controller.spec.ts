import { Test, TestingModule } from '@nestjs/testing';
import { IdentitySvcController } from './identity-svc.controller';
import { IdentitySvcService } from './identity-svc.service';

describe('IdentitySvcController', () => {
  let identitySvcController: IdentitySvcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [IdentitySvcController],
      providers: [IdentitySvcService],
    }).compile();

    identitySvcController = app.get<IdentitySvcController>(IdentitySvcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(identitySvcController.getHello()).toBe('Hello World!');
    });
  });
});

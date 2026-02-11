import { Test, TestingModule } from '@nestjs/testing';
import { FeedSvcController } from './feed-svc.controller';
import { FeedSvcService } from './feed-svc.service';

describe('FeedSvcController', () => {
  let feedSvcController: FeedSvcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FeedSvcController],
      providers: [FeedSvcService],
    }).compile();

    feedSvcController = app.get<FeedSvcController>(FeedSvcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(feedSvcController.getHello()).toBe('Hello World!');
    });
  });
});

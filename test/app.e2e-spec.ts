import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome to my api');
  });

  describe('/touch-api', () => {
    it('GET', () => {
      return request(app.getHttpServer())
        .get('/touch-api')
        .expect(200)
        .expect('[]');
    });

    it('POST', () => {
      return request(app.getHttpServer())
        .post('/touch-api')
        .send({ name: 'test', year: 25, pwd: ['1', '1', '6'] })
        .expect(201);
    });

    it('DELETE', () => {
      return request(app.getHttpServer()).delete('/touch-api').expect(404);
    });
  });

  describe('/touch-api/:id', () => {
    it('GET 200', () => {
      return request(app.getHttpServer()).get('/touch-api/1').expect(200);
    });
    it.todo('DELETE');
    it.todo('PATCH');
  });
});

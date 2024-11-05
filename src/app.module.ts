import { Module } from '@nestjs/common';
import { TouchApiController } from './touch-api/touch-api.controller';
import { TouchApiService } from './touch-api/touch-api.service';
import { TouchApiModule } from './touch-api/touch-api.module';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

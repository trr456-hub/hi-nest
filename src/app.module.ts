import { Module } from '@nestjs/common';
import { TouchApiController } from './touch-api/touch-api.controller';
import { TouchApiService } from './touch-api/touch-api.service';

@Module({
  imports: [],
  controllers: [TouchApiController],
  providers: [TouchApiService],
})
export class AppModule {}

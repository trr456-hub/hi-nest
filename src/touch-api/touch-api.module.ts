import { Module } from '@nestjs/common';
import { TouchApiController } from './touch-api.controller';
import { TouchApiService } from './touch-api.service';

@Module({
  imports: [TouchApiModule],
  controllers: [TouchApiController],
  providers: [TouchApiService],
})
export class TouchApiModule {}

import { Module } from '@nestjs/common';
import { TouchApiController } from './touch-api/touch-api.controller';

@Module({
  imports: [],
  controllers: [TouchApiController],
  providers: [],
})
export class AppModule {}

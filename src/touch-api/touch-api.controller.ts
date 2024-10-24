import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('touch-api')
export class TouchApiController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') apiId: string) {
    return `id를 데이터로 가지는 url 테스트 id : ${apiId}`;
  }

  @Post()
  create() {
    return 'POST 기능 테스트';
  }

  @Delete('/:id')
  remove(@Param('id') apiId: string) {
    return `DELETE 기능 테스트 id : ${apiId}`;
  }

  @Put('/:id')
  path(@Param('id') apiId: string) {
    return `PUT 기능 테스트 id : ${apiId}`;
  }

  @Patch('/:id')
  patch(@Param('id') apiId: string) {
    return `PATCH 기능 테스트 id : ${apiId}`;
  }
}

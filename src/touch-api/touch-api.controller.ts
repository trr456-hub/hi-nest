import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('touch-api')
export class TouchApiController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('name') searchData: string) {
    return `search for a api title : ${searchData}`;
  }

  @Get('/:id')
  getOne(@Param('id') apiId: string) {
    return `id를 데이터로 가지는 url 테스트 id : ${apiId}`;
  }

  @Post()
  create(@Body() apiData) {
    console.log(apiData);
    // return 'POST 기능 테스트';
    return apiData;
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
  patch(@Param('id') apiId: string, @Body() updateData) {
    // return `PATCH 기능 테스트 id : ${apiId}`;
    return {
      updateApi: apiId,
      ...updateData,
    };
  }
}

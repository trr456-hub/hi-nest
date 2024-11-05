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
import { TouchApiService } from './touch-api.service';
import { ApiData } from './entities/touch-api.entity';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dtoi';

@Controller('touch-api')
export class TouchApiController {
  constructor(private readonly touchApiService: TouchApiService) {}

  @Get()
  getAll(): ApiData[] {
    return this.touchApiService.getAll();
  }

  @Get('search')
  search(@Query('name') searchData: string) {
    return `search for a api title : ${searchData}`;
  }

  @Get('/:id')
  getOne(@Param('id') apiId: number): ApiData {
    // return `id를 데이터로 가지는 url 테스트 id : ${apiId}`;
    console.log(typeof apiId);
    return this.touchApiService.getOne(apiId);
  }

  @Post()
  create(@Body() apiData: CreateApiDto) {
    // console.log(apiData);
    // return 'POST 기능 테스트';
    // return apiData;
    return this.touchApiService.create(apiData);
  }

  @Delete('/:id')
  remove(@Param('id') apiId: number) {
    // return `DELETE 기능 테스트 id : ${apiId}`;
    return this.touchApiService.remove(apiId);
  }

  @Put('/:id')
  path(@Param('id') apiId: number) {
    return `PUT 기능 테스트 id : ${apiId}`;
  }

  @Patch('/:id')
  patch(@Param('id') apiId: number, @Body() updateData: UpdateApiDto) {
    // return `PATCH 기능 테스트 id : ${apiId}`;
    // return {
    //   updateApi: apiId,
    //   ...updateData,
    // };
    return this.touchApiService.update(apiId, updateData);
  }
}

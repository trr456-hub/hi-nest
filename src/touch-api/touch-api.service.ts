import { Injectable, NotFoundException } from '@nestjs/common';
import { ApiData } from './entities/touch-api.entity';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dtoi';

@Injectable()
export class TouchApiService {
  private data: ApiData[] = [];

  getAll(): ApiData[] {
    return this.data;
  }

  getOne(id: number): ApiData {
    const data = this.data.find((data) => data.id === id);
    if (!data) {
      throw new NotFoundException(`data id값을 찾을 수 없습니다. ${id}`);
    }
    return data;
  }

  remove(id: number) {
    this.getOne(id);
    this.data = this.data.filter((data) => data.id !== id);
  }

  create(apiData: CreateApiDto) {
    this.data.push({
      id: this.data.length + 1,
      ...apiData,
    });
  }

  update(id: number, updateData: UpdateApiDto) {
    const data = this.getOne(id);
    this.remove(id);
    this.data.push({ ...data, ...updateData });
  }
}

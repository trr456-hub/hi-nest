import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateApiDto } from './create-api.dto';

// npm i @nestjs/mapped-types
// partial types(부분 타입)
// 부분 타입은 베이스 타입이 필요함

export class UpdateApiDto extends PartialType(CreateApiDto) {}

import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateApiDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly pwd: string[];
}

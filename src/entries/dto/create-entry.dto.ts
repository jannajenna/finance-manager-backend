import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEntryDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsNotEmpty()
  categoryId: number; // We'll pass the category's id to relate the entry
}

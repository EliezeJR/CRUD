import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateBrandsDto {
  @IsOptional()
  name: string;
}

import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  ParseUUIDPipe,
} from "@nestjs/common";
import { CreateBrandsDto } from "./dto/create-brands.dto";
import { UpdateBrandsDto } from "./dto/update-brands.dto";
import { BrandsService } from "./brands.service";

@Controller("marca")
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  create(@Body() brands: CreateBrandsDto) {
    return this.brandsService.create(brands);
  }

  @Get()
  findAll() {
    return this.brandsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.brandsService.findOne(id);
  }

  @Delete(":id")
  deleteOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.brandsService.remove(id);
  }

  @Patch(":id")
  updateProduct(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() changeDto: CreateBrandsDto
  ) {
    return this.brandsService.update(id, changeDto);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { CreatePaisesDto } from "./dto/create-country.dto";
import { PaisesService } from "./gender.service";

@Controller("paises")
export class PaisesController {
  constructor(private readonly paisesService: PaisesService) {}

  @Post()
  create(@Body() paisesDto: CreatePaisesDto) {
    return this.paisesService.create(paisesDto);
  }

  @Get()
  findAll() {
    return this.paisesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.paisesService.findOne(id);
  }

  @Delete(":id")
  deleteOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.paisesService.remove(id);
  }

  @Patch(":id")
  updateProduct(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() changeDto: CreatePaisesDto
  ) {
    return this.paisesService.update(id, changeDto);
  }
}

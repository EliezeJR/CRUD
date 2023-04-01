import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Paises } from "./entities/country.entity";
import { PaisesController } from "./countries.controller";
import { PaisesService } from "./gender.service";

@Module({
  imports: [TypeOrmModule.forFeature([Paises])],
  controllers: [PaisesController],
  providers: [PaisesService],
})
export class PaisesModule {}

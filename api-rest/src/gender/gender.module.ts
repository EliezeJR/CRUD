import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Genero } from "./entities/gender.entity";
import { GeneroController } from "./gender.controller";
import { GeneroService } from "./gender.service";

@Module({
  imports: [TypeOrmModule.forFeature([Genero])],
  controllers: [GeneroController],
  providers: [GeneroService],
})
export class GeneroModule {}

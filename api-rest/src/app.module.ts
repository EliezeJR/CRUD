import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MenuModule } from "./menu/menu.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriesModule } from "./categories/categories.module";
import { Category } from "./categories/entities/category.entity";
import { MarcasModule } from "./brands/brands.module";
import { Brands } from "./brands/entitities/brands.entity";
import { PaisesModule } from "./countries/countries.module";
import { Paises } from "./countries/entities/country.entity";
import { GeneroModule } from "./gender/gender.module";
import { Genero } from "./gender/entities/gender.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "12345678",
      database: "ecomerce",
      entities: [Category, Brands, Paises, Genero],
      synchronize: true,
    }),
    MenuModule,
    CategoriesModule,
    MarcasModule,
    PaisesModule,
    GeneroModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

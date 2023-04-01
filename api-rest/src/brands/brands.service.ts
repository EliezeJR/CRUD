import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import slugify from "slugify";
import { Repository } from "typeorm";
import { CreateBrandsDto } from "./dto/create-brands.dto";
import { UpdateBrandsDto } from "./dto/update-brands.dto";
import { Brands } from "./entitities/brands.entity";

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brands)
    private brandsRepository: Repository<Brands>
  ) {}

  async create(genderDto: CreateBrandsDto) {
    const brands = this.brandsRepository.create(genderDto);
    await this.brandsRepository.save(brands);

    return brands;
  }

  findAll() {
    return this.brandsRepository.find();
  }

  findOne(id: string) {
    return this.brandsRepository.findOneBy({ id });
  }

  async remove(id: string) {
    const brands = await this.findOne(id);
    await this.brandsRepository.remove(brands);
    return `brands eliminado`;
  }

  async update(id: string, changeDto: CreateBrandsDto) {
    const findBrands = await this.findOne(id);
    const updateBrands = await this.brandsRepository.merge(
      findBrands,
      changeDto
    );

    return this.brandsRepository.save(updateBrands);
  }
}

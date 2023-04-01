import { PartialType } from "@nestjs/mapped-types";
import { CreatePaisesDto } from "./create-country.dto";

export class UpdatePaisesDto extends PartialType(CreatePaisesDto) {}

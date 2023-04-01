import { Test, TestingModule } from "@nestjs/testing";
import { MarcasService } from "./brands.service";

describe("MarcasService", () => {
  let service: MarcasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarcasService],
    }).compile();

    service = module.get<MarcasService>(MarcasService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});

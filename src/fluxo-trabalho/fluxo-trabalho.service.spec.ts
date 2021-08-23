import { Test, TestingModule } from '@nestjs/testing';
import { FluxoTrabalhoService } from './fluxo-trabalho.service';

describe('FluxoTrabalhoService', () => {
  let service: FluxoTrabalhoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FluxoTrabalhoService],
    }).compile();

    service = module.get<FluxoTrabalhoService>(FluxoTrabalhoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { FluxoTrabalhoController } from './fluxo-trabalho.controller';
import { FluxoTrabalhoService } from './fluxo-trabalho.service';

describe('FluxoTrabalhoController', () => {
  let controller: FluxoTrabalhoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FluxoTrabalhoController],
      providers: [FluxoTrabalhoService],
    }).compile();

    controller = module.get<FluxoTrabalhoController>(FluxoTrabalhoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

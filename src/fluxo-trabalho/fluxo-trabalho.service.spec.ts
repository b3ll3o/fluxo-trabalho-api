import { Test, TestingModule } from '@nestjs/testing';
import { NovoFluxoTrabalhoDto } from './application/dto';
import { FluxoTrabalhoService } from './fluxo-trabalho.service';

const NOME = 'fluxo_trabalho'

function fluxoTrabalhoFactory(): NovoFluxoTrabalhoDto {
  return new NovoFluxoTrabalhoDto(NOME)
}

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

  test('deve retorna um fluxo de trabalho cadastrado', () => {
    const fluxo = service.adicionaFluxoTrabalho(fluxoTrabalhoFactory())
    expect(fluxo.id).toBe(1)
    expect(fluxo.nome).toBe(NOME)
  })
});

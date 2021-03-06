import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { FluxoTrabalhoCadastradoDto, NovoFluxoTrabalhoDto } from './application/dto';
import { FluxoTrabalhoController } from './fluxo-trabalho.controller';
import { FluxoTrabalhoService } from './fluxo-trabalho.service';

const NOME = 'fluxo_trabalho'

function novoFluxoTrabalhoFactory(nome=NOME): NovoFluxoTrabalhoDto {
  return new NovoFluxoTrabalhoDto(nome)
}

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

  test('deve retorna um novo fluxo de trabalho cadastrado', () => {
    const res = controller.adicionaNovoFluxoTrabalho(novoFluxoTrabalhoFactory()) as FluxoTrabalhoCadastradoDto
    expect(res.id).toBe(1)
    expect(res.nome).toBe(NOME)
  })

  test('deve retorna um erro caso nome seja inválido', () => {
    const res = controller.adicionaNovoFluxoTrabalho(novoFluxoTrabalhoFactory('')) as BadRequestException
    expect(res.getStatus()).toBe(400)
  })

  test('deve retorna uma lista de fluxos de trabalhos cadastrados', () => {
    controller.adicionaNovoFluxoTrabalho(novoFluxoTrabalhoFactory())
    const fluxos = controller.listaFluxosTrabalho()
    expect(fluxos).toBeDefined()
    expect(fluxos.length).toBeGreaterThan(0)
  })
});

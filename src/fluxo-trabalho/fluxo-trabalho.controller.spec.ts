import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { FluxoTrabalhoCadastradoDto, NovaTarefaDto, NovoFluxoTrabalhoDto, TarefaCadastradaDto } from './application/dto';
import { FluxoTrabalhoController } from './fluxo-trabalho.controller';
import { FluxoTrabalhoService } from './application/services/fluxo-trabalho.service';

const NOME = 'fluxo_trabalho'
const NOME_TAREFA = 'tarefa'

function novoFluxoTrabalhoFactory(nome=NOME): NovoFluxoTrabalhoDto {
  return new NovoFluxoTrabalhoDto(nome)
}

function novaTarefaFactory(nome=NOME_TAREFA): NovaTarefaDto {
  return new NovaTarefaDto(nome)
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

  //adicionaNovoFluxoTrabalho
  test('deve retorna um novo fluxo de trabalho cadastrado', () => {
    const res = controller.adicionaNovoFluxoTrabalho(novoFluxoTrabalhoFactory()) as FluxoTrabalhoCadastradoDto
    expect(res.id).toBe(1)
    expect(res.nome).toBe(NOME)
  })

  test('deve retorna um erro caso nome seja inválido', () => {
    const res = controller.adicionaNovoFluxoTrabalho(novoFluxoTrabalhoFactory('')) as BadRequestException
    expect(res.getStatus()).toBe(400)
  })

  //listaFluxosTrabalho
  test('deve retorna uma lista de fluxos de trabalhos cadastrados', () => {
    controller.adicionaNovoFluxoTrabalho(novoFluxoTrabalhoFactory())
    const fluxos = controller.listaFluxosTrabalho()
    expect(fluxos).toBeDefined()
    expect(fluxos.length).toBeGreaterThan(0)
  })

  //cadastraTarefaEmUmFluxoTrabalho
  test('deve retorna uma nova tarefa cadastrada', () => {
    const res = controller.cadastraTarefaEmUmFluxoTrabalho(1, novaTarefaFactory()) as TarefaCadastradaDto
    expect(res.id).toBe(1)
    expect(res.nome).toBe(NOME_TAREFA)
  })
});

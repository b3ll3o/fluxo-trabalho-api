import { Etapa } from './etapa';

const NOME = 'nome_etapa';

function etapaFactory() {
  return new Etapa(NOME);
}

describe('Etapa', () => {
  test('deve criar uma nova etapa', () => {
    const tarefa = etapaFactory();
    expect(tarefa).toBeDefined();
    expect(tarefa.nome).toBe(NOME);
  });
});

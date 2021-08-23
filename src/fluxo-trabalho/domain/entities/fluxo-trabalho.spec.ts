import { FluxoTrabalho } from "./fluxo-trabalho"

const NOME = 'teste'

describe('FluxoTrabalho', () => {

  test('não deve ser undefined', () => {
    const fluxoTrabalho = new FluxoTrabalho(NOME)
    expect(fluxoTrabalho).toBeDefined()
  })

  test('deve ter um nome', () => {
    const fluxoTrabalho = new FluxoTrabalho(NOME)
    expect(fluxoTrabalho.nome).toBe(NOME)
  })
})
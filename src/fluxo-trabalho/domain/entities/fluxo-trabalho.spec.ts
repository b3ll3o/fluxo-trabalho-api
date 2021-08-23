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

  test('deve lançar um erro caso o nome seja undefined', () => {
    expect(() => new FluxoTrabalho(undefined)).toThrow()
  })

  test('deve lançar um erro caso o nome seja null', () => {
    expect(() => new FluxoTrabalho(null)).toThrow()
  })

  test('deve lançar um erro caso o nome seja vazio', () => {
    expect(() => new FluxoTrabalho('')).toThrow()
  })
})
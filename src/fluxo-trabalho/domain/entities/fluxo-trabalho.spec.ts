import { FluxoTrabalho } from "./fluxo-trabalho"


describe('FluxoTrabalho', () => {

  test('não deve ser undefined', () => {
    const fluxoTrabalho = new FluxoTrabalho()
    expect(fluxoTrabalho).toBeDefined()
  })
})
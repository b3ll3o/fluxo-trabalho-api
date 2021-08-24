export class FluxoTrabalho {
  private _nome: string;

  constructor(nome: string) {
    if (nome === undefined || nome === null || nome === '')
      throw new Error('Nome do fluxo de trabalho inválido.');

    this._nome = nome;
  }

  get nome() {
    return this._nome;
  }
}

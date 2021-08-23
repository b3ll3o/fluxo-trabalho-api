import { NovoFluxoTrabalhoDto } from "./novo-fluxo-trabalho.dto";

export class FluxoTrabalhocadastradoDto extends NovoFluxoTrabalhoDto {
  constructor(public id: number, nome: string){
    super(nome)
  }
}
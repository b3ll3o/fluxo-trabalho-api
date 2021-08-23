import { Injectable } from '@nestjs/common';
import { FluxoTrabalhoCadastradoDto, NovoFluxoTrabalhoDto } from './application/dto';
import { FluxoTrabalho } from './domain/entities/fluxo-trabalho';

@Injectable()
export class FluxoTrabalhoService {

  private fluxos: FluxoTrabalho[]
  private contador: number

  constructor(){
    this.fluxos = []
    this.contador = 1
  }

  adicionaFluxoTrabalho(novoFluxoTrabalho: NovoFluxoTrabalhoDto): FluxoTrabalhoCadastradoDto {
    this.fluxos.push(new FluxoTrabalho(novoFluxoTrabalho.nome))
    return new FluxoTrabalhoCadastradoDto(this.contador++, novoFluxoTrabalho.nome)
  }
}

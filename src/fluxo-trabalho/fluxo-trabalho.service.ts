import { Injectable } from '@nestjs/common';
import { FluxoTrabalhocadastradoDto, NovoFluxoTrabalhoDto } from './application/dto';

@Injectable()
export class FluxoTrabalhoService {

  private fluxos: FluxoTrabalhocadastradoDto[]
  private contador: number

  constructor(){
    this.fluxos = []
    this.contador = 1
  }

  adicionaFluxoTrabalho(novoFluxoTrabalho: NovoFluxoTrabalhoDto): FluxoTrabalhocadastradoDto {
    const fluxoCadastrado = new FluxoTrabalhocadastradoDto(this.contador, novoFluxoTrabalho.nome)
    this.fluxos.push(fluxoCadastrado)
    return fluxoCadastrado
  }
}

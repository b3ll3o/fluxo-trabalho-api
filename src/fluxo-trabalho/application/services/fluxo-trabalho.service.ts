import { Injectable } from '@nestjs/common';
import {
  FluxoTrabalhoCadastradoDto,
  NovoFluxoTrabalhoDto,
} from '../../application/dto';
import { FluxoTrabalho } from '../../domain/entities/fluxo-trabalho';

@Injectable()
export class FluxoTrabalhoService {
  private fluxos: FluxoTrabalho[];
  private fluxosCadastrados: FluxoTrabalhoCadastradoDto[];
  private contador: number;

  constructor() {
    this.fluxos = [];
    this.fluxosCadastrados = [];
    this.contador = 1;
  }

  adicionaFluxoTrabalho(
    novoFluxoTrabalho: NovoFluxoTrabalhoDto,
  ): FluxoTrabalhoCadastradoDto {
    const fluxo = new FluxoTrabalho(novoFluxoTrabalho.nome);
    this.fluxos.push(fluxo);

    const fluxoCadastrado = new FluxoTrabalhoCadastradoDto(
      this.contador,
      fluxo.nome,
    );
    this.fluxosCadastrados.push(fluxoCadastrado);

    this.contador++;

    return fluxoCadastrado;
  }

  listaFluxosTrabalho(): FluxoTrabalhoCadastradoDto[] {
    return this.fluxosCadastrados;
  }
}

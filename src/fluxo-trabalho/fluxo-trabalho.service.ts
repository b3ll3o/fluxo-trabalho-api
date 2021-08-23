import { Injectable } from '@nestjs/common';
import { FluxoTrabalho } from './domain/entities/fluxo-trabalho';

@Injectable()
export class FluxoTrabalhoService {

  private fluxos: FluxoTrabalho[]
  
  constructor(){
    this.fluxos = []
  }
}

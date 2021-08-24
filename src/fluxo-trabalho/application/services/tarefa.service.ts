import { Injectable } from '@nestjs/common';
import { FluxoTrabalhoService } from './fluxo-trabalho.service';

@Injectable()
export class TarefaService {
  constructor(private fluxoTrabalhoService: FluxoTrabalhoService) {}
}

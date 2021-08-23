import { Controller } from '@nestjs/common';
import { FluxoTrabalhoService } from './fluxo-trabalho.service';

@Controller('fluxo-trabalho')
export class FluxoTrabalhoController {
  constructor(private readonly fluxoTrabalhoService: FluxoTrabalhoService) {}
}

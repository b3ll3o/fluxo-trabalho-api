import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { NovoFluxoTrabalhoDto } from './application/dto';
import { FluxoTrabalhoService } from './fluxo-trabalho.service';

@Controller('fluxo-trabalho')
export class FluxoTrabalhoController {
  constructor(private readonly fluxoTrabalhoService: FluxoTrabalhoService) {}

  @Post()
  adicionaNovoFluxoTrabalho(@Body() novoFluxoTrabalho: NovoFluxoTrabalhoDto){
    try {
      return this.fluxoTrabalhoService.adicionaFluxoTrabalho(novoFluxoTrabalho)
    } catch (e) {
      return new BadRequestException(e.message)
    }
  }
}

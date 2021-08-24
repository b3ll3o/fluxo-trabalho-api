import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { FluxoTrabalhoCadastradoDto, NovoFluxoTrabalhoDto } from './application/dto';
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

  @Get()
  listaFluxosTrabalho(): FluxoTrabalhoCadastradoDto[] {
    return this.fluxoTrabalhoService.listaFluxosTrabalho()
  }
}

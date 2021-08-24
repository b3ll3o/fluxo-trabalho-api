import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import {
  FluxoTrabalhoCadastradoDto,
  NovoFluxoTrabalhoDto,
} from './application/dto';
import { FluxoTrabalhoService } from './application/services/fluxo-trabalho.service';

@Controller('fluxo-trabalho')
export class FluxoTrabalhoController {
  constructor(private readonly fluxoTrabalhoService: FluxoTrabalhoService) {}

  @Post()
  adicionaNovoFluxoTrabalho(@Body() novoFluxoTrabalho: NovoFluxoTrabalhoDto) {
    try {
      return this.fluxoTrabalhoService.adicionaFluxoTrabalho(novoFluxoTrabalho);
    } catch (e) {
      return new BadRequestException(e);
    }
  }

  @Get()
  listaFluxosTrabalho(): FluxoTrabalhoCadastradoDto[] {
    return this.fluxoTrabalhoService.listaFluxosTrabalho();
  }

  @Post(':id/tarefa')
  cadastraTarefaEmUmFluxoTrabalho(
    @Param('id') id: number
  ): boolean | BadRequestException {
    try {
      return true
    } catch (e) {
      return new BadRequestException(e);
    }
  }
}

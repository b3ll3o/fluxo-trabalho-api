import { Module } from '@nestjs/common';
import { FluxoTrabalhoService } from './application/services/fluxo-trabalho.service';
import { FluxoTrabalhoController } from './fluxo-trabalho.controller';

@Module({
  controllers: [FluxoTrabalhoController],
  providers: [FluxoTrabalhoService]
})
export class FluxoTrabalhoModule {}

import { Module } from '@nestjs/common';
import { FluxoTrabalhoModule } from './fluxo-trabalho/fluxo-trabalho.module';

@Module({
  imports: [FluxoTrabalhoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { FluxoTrabalhoModule } from './fluxo-trabalho/fluxo-trabalho.module';
import { TarefaModule } from './tarefa/tarefa.module';

@Module({
  imports: [FluxoTrabalhoModule, TarefaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

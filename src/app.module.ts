import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FluxoTrabalhoModule } from './fluxo-trabalho/fluxo-trabalho.module';

@Module({
  imports: [FluxoTrabalhoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

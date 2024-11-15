import { Module } from '@nestjs/common';
import { ConsumoAguaController } from './consumo_agua.controller';
import { ConsumoAguaService } from './consumo_agua.service';
import { ConsumoAguaService } from './consumo_agua.service';
import { ConsumoAguaController } from './consumo_agua.controller';

@Module({
  controllers: [ConsumoAguaController],
  providers: [ConsumoAguaService]
})
export class ConsumoAguaModule {}

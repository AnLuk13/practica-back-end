import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalonsModule } from './salons/salons.module';

@Module({
  imports: [SalonsModule, SalonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

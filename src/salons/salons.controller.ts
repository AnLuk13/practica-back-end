import { Controller, Get, Param } from '@nestjs/common';
import SalonsService from './salons.service';

@Controller('salon')
export class SalonsController {
  constructor(private readonly salonsService: SalonsService) {}

  @Get()
  async getAllSalons() {
    return this.salonsService.findAll();
  }

  @Get(':id')
  async getSalonById(@Param() { id }: { id: string }) {
    return this.salonsService.findOne(id);
  }
}

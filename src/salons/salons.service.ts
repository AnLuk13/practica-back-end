import { Injectable, NotFoundException } from '@nestjs/common';
import { salons } from '../DB';

@Injectable()
class SalonsService {
  findAll() {
    return salons;
  }

  async findOne(id: string) {
    const salonById = salons.find((salon) => salon.id === id);
    if (!salonById) {
      throw new NotFoundException('A salon with such id does not exist!');
    }
    return salonById;
  }
}

export default SalonsService;

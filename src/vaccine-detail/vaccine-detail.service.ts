import { Injectable } from '@nestjs/common';
import { CreateVaccineDetailDto } from './dto/create-vaccine-detail.dto';
import { UpdateVaccineDetailDto } from './dto/update-vaccine-detail.dto';
import { VaccineDetailRepository } from './vaccine.repos';

@Injectable()
export class VaccineDetailService {
  constructor(private readonly vaccineRepo: VaccineDetailRepository) {}

  create(createVaccineDetailDto: CreateVaccineDetailDto) {
    return this.vaccineRepo.create(createVaccineDetailDto);
  }

  findAll() {
    return this.vaccineRepo.findAll();
  }

  findOne(vId: number) {
    return this.vaccineRepo.findOne({ vId });
  }

  update(vId: number, updateVaccineDetailDto: UpdateVaccineDetailDto) {
    return this.vaccineRepo.findOneAndUpdate({ vId }, updateVaccineDetailDto);
  }

  remove(vId: number) {
    return this.vaccineRepo.remove({ vId });
  }
}

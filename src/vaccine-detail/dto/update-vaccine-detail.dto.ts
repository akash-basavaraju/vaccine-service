import { PartialType } from '@nestjs/mapped-types';
import { CreateVaccineDetailDto } from './create-vaccine-detail.dto';

export class UpdateVaccineDetailDto extends PartialType(
  CreateVaccineDetailDto,
) {}

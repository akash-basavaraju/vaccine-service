import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VaccineDetailService } from './vaccine-detail.service';
import { CreateVaccineDetailDto } from './dto/create-vaccine-detail.dto';
import { UpdateVaccineDetailDto } from './dto/update-vaccine-detail.dto';

@Controller('vaccine-detail')
export class VaccineDetailController {
  constructor(private readonly vaccineDetailService: VaccineDetailService) {}

  @Post()
  create(@Body() createVaccineDetailDto: CreateVaccineDetailDto) {
    return this.vaccineDetailService.create(createVaccineDetailDto);
  }

  @Get()
  findAll() {
    return this.vaccineDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vaccineDetailService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVaccineDetailDto: UpdateVaccineDetailDto,
  ) {
    return this.vaccineDetailService.update(+id, updateVaccineDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vaccineDetailService.remove(+id);
  }
}

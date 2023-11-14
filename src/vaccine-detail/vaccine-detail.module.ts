import { Module } from '@nestjs/common';
import { VaccineDetailService } from './vaccine-detail.service';
import { VaccineDetailController } from './vaccine-detail.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VaccineDetail, VaccineDetailSchema } from './vaccine.schema';
import { VaccineDetailRepository } from './vaccine.repos';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VaccineDetail.name, schema: VaccineDetailSchema },
    ]),
  ],
  controllers: [VaccineDetailController],
  providers: [VaccineDetailService, VaccineDetailRepository],
})
export class VaccineDetailModule {}

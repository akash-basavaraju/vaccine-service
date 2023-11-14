import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { VaccineDetail, VaccineDetailDocument } from './vaccine.schema';

@Injectable()
export class VaccineDetailRepository {
  constructor(
    @InjectModel(VaccineDetail.name)
    private vaccineModel: Model<VaccineDetailDocument>,
  ) {}

  async findOne(vaccineFilterQuery: FilterQuery<VaccineDetail>) {
    return this.vaccineModel.findOne(vaccineFilterQuery);
  }

  async findAll() {
    return this.vaccineModel.find();
  }

  async create(vaccine: VaccineDetail) {
    const vaccineModel = new this.vaccineModel(vaccine);
    return vaccineModel.save();
  }

  async remove(vaccineQueryFilter: FilterQuery<VaccineDetail>) {
    return this.vaccineModel.deleteOne(vaccineQueryFilter);
  }

  async findOneAndUpdate(
    vaccineQueryFilter: FilterQuery<VaccineDetail>,
    vaccine: Partial<VaccineDetail>,
  ) {
    return this.vaccineModel.findOneAndUpdate(vaccineQueryFilter, vaccine);
  }
}

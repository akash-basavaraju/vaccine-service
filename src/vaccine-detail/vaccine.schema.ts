import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VaccineDetailDocument = VaccineDetail & Document;

@Schema()
export class VaccineDetail {
  @Prop()
  vId: number;

  @Prop()
  date: string;

  @Prop()
  noOfVaccinesAvailable: number;
}

export const VaccineDetailSchema = SchemaFactory.createForClass(VaccineDetail);

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VaccineDetailModule } from './vaccine-detail/vaccine-detail.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0:27017/vaccine-detail'),
    VaccineDetailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

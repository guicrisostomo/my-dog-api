/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { WeightController } from "src/controllers/weight.controller";
import { IpConfigModule } from "./ip-config.module";
import { WeightService } from "src/services/weight.service";

@Module({
  imports: [IpConfigModule],
  controllers: [WeightController],
  providers: [WeightService],
})
export class WeightModule {}

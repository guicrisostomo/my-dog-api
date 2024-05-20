/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { IpConfigService } from "src/services/ip-config.service";
import { UserModule } from "./user.module";
import { IpConfigController } from "src/controllers/ip-config.controller";

@Module({
  imports: [
    UserModule
  ],
  providers: [
    IpConfigService
  ],
  controllers: [
    IpConfigController
  ],
})
export class IpConfigModule {}

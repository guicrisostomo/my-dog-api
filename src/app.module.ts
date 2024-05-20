import { Module } from "@nestjs/common";
import { UserModule } from "./modules/user.module";
import { IpConfigModule } from "./modules/ip-config.module";
import { WeightModule } from "./modules/weight.module";

@Module({
  imports: [UserModule, IpConfigModule, WeightModule],
})
export class AppModule {}

/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { UserController } from "src/controllers/user.controller";
import { UserService } from "src/services/user.service";
import { BcryptModule } from "src/utils/bcrypt";
import { jwtModuleOptions } from "src/utils/jsonwebtoken";

@Module({
  imports: [BcryptModule, JwtModule.register(jwtModuleOptions)],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Request, Post, UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/services/user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async execute(@Request() request: Request) {
    const token = request["headers"]["authorization"].replace("Bearer ", "");

    if (!token) throw new UnauthorizedException();

    return await this.userService.getUser(token);
  }

  @Post()
  async signIn(@Body("email") email: string, @Body("password") senha: string) {
    return await this.userService.signIn(email, senha);
  }
}

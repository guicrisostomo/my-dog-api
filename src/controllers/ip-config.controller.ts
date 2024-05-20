/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Request, Put, UnauthorizedException } from "@nestjs/common";
import { IpConfigService } from "src/services/ip-config.service";

@Controller("ip-config")
export class IpConfigController {
  constructor(private readonly ipConfigService: IpConfigService) {}

  @Get()
  async getIpConfig() {
    return await this.ipConfigService.getIpConfig();
  }

  @Post()
  async createIpConfig(@Request() request: Request, @Body("ip") ip: any, @Body("identify") identify: any) {
    const token = request["headers"]["authorization"].replace("Bearer ", "");

    if (!token) throw new UnauthorizedException();
    
    return await this.ipConfigService.insertIpConfig(ip, token, identify);
  }

  @Put(":id")
  async updateIpConfig(@Body("ip") ip: any, @Request() request: Request) {
    const token = request["headers"]["authorization"].replace("Bearer ", "");

    if (!token) throw new UnauthorizedException();

    return await this.ipConfigService.updateIpConfig(token, ip);
  }
}
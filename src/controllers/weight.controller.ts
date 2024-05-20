/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Put } from "@nestjs/common";
import { WeightService } from "src/services/weight.service";

@Controller("weight")
export class WeightController {
  constructor(private readonly weightService: WeightService) { }
  
  @Get(":id")
  async getWeight() {
    return await this.weightService.getWeight();
  }

  @Put()
  async updateWeight(@Body("id") id: string, @Body("weight") weight: any) {
    return await this.weightService.updateWeight(id, weight);
  }
}

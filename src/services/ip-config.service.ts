/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import pool from "src/config/database";
import { UserService } from "./user.service";

@Injectable()
export class IpConfigService {
  constructor(
    private readonly userService: UserService
  ) { }
  
  async getIpConfig() {
    const response = await pool.query("SELECT * FROM ip_config");
    
    return response.rows;
  }

  async insertIpConfig(
    ip: any,
    token: any,
    identify: any
  ) {

    const user = await this.userService.getUser(token);

    if (user === "Invalid token") {
      return user;
    } else if (user === "The user does not exists") {
      return user;
    }

    await pool.query(
      "INSERT INTO ip_config (ip, identify, user) VALUES ($1, $2, $3)",
      [ip, identify, user.id]
    );
    
    return "IpConfig Created Successfully";
  }

  async updateIpConfig(
    token: string,
    ip: any
  ) {
    const user = await this.userService.getUser(token);

    await pool.query("UPDATE ip_config SET ip = $1 WHERE user = $2", [ip, user.id]);
    
    return {
      msg: "IpConfig Updated Successfully",
    }
  }
}
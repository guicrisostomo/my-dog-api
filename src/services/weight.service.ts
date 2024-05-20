/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import pool from "src/config/database";

@Injectable()
export class WeightService {
  async getWeight() {
    const response = await pool.query("SELECT weight FROM ip_config");
    return response.rows;
  }

  async updateWeight(id: string, weight: any) {
    await pool.query("UPDATE ip_config SET weight = $1 WHERE id = $2", [
      weight,
      id,
    ]);
    return "Weight Updated Successfully";
  }

  async createWeight(ip: any, id: any) {

    await pool.query("UPDATE ip_config SET ip = $1 WHERE id = $2", [ip, id]);

    return "IpConfig Updated Successfully";
  }
}

/* eslint-disable prettier/prettier */
import { Inject, Injectable } from "@nestjs/common";
import pool from "src/config/database";
import { JwtService } from "@nestjs/jwt";
import { BCRYPT_INJECT_KEY, Bcrypt } from "src/utils/bcrypt";

@Injectable()
export class UserService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(BCRYPT_INJECT_KEY) private bcrypt: Bcrypt
  ) {}

  async getUser(token: any) {
    const tokenDecoded = await this.jwtService.decode(token);

    if (tokenDecoded === null) {
      return "Invalid token";
    }

    const { email } = tokenDecoded;

    const user = await this.findOne(email);

    if (user === "The user does not exists") {
      return user;
    } else {
      return user;
    }
  }

  async signIn(email: any, password: any) {
    const user = await this.findOne(email);

    if (user === "The user does not exists") {
      return {
        msg: user,
      };
    }

    const validPassword = await this.bcrypt.compare(password, user.password);

    if (!validPassword) {
      return { msg: "The password is incorrect" };
    }

    const token = this.jwtService.sign({ email });

    return {
      data: token,
    };
  }

  async findOne(email: string) {
    const response = await pool.query(
      "SELECT * FROM tb_user WHERE email = $1",
      [email]
    );

    if (response.rows.length === 0) {
      return "The user does not exists";
    } else {
      return response.rows[0];
    }
  }
}

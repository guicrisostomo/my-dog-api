import { JwtModuleOptions } from '@nestjs/jwt';
import { config } from 'dotenv';

config();

const { JWT_TOKEN } = process.env;

const secret = JWT_TOKEN || false;

if (!secret)
  throw new Error(`Por favor, confira a variavel de ambiente JWT_TOKEN`);

export const jwtModuleOptions: JwtModuleOptions = {
  secret,
  signOptions: { expiresIn: '1h' },
};

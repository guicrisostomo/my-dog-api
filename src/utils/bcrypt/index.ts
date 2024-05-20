import { Module } from '@nestjs/common';
import { compare, hash } from 'bcrypt';

export const BCRYPT_INJECT_KEY = 'BCRYPT_INJECT';

export type Bcrypt = {
  hash: typeof hash;
  compare: typeof compare;
};

@Module({
  providers: [
    { provide: BCRYPT_INJECT_KEY, useValue: { hash: hash, compare: compare } },
  ],
  exports: [
    { provide: BCRYPT_INJECT_KEY, useValue: { hash: hash, compare: compare } },
  ],
})
export class BcryptModule {}

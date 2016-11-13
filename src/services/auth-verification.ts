import {Injectable} from '@angular/core';

@Injectable()
export class AuthVerification {

  private keys = ['123456789'];

  isValid(key: string): boolean {
    return this.keys.indexOf(key) !== -1;
  }

}

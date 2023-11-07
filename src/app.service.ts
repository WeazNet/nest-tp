import { Injectable } from '@nestjs/common';
import { HelloMessage } from './helloMessage';

@Injectable()
export class AppService {
  getHello(name :string): HelloMessage {
    return {"hello":name};
  }
}

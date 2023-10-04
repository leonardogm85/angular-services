import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  consoleLog(message: string): void {
    console.log(message);
  }

}

/**
 * Created by Michal Dolnak on 16.3.2017.
 * email: dolnakmichal@gmail.com
 */

export class Message {
  key:string;
  value:string;
  args:string[];
  constructor(key: string) {
    this.key = key;
  }
  constructor(key: string, args: string[]) {
    this.key = key;
    this.args = args;
  }
}

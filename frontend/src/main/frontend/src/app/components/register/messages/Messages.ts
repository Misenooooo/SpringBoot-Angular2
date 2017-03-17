import {Message} from "../../../model/Message";
import {HttpService} from "../../../services/register.service";
/**
 * Created by Michal Dolnak on 16.3.2017.
 * email: dolnakmichal@gmail.com
 */
export class Messages { /*TODO Move keys to the single file, load them it. Run them through a for cycle and replace register.* with key. */
  messages:Message[];
  init(){
    console.log("init");
    this.messages.push(new Message("register.title"));
    this.messages.push(new Message("register.firstName"));
    this.messages.push(new Message("register.lastName"));
    this.messages.push(new Message("register.email"));
    this.messages.push(new Message("register.password"));
    this.messages.push(new Message("register.passwordRepeat"));

  }
  constructor(private httpService:HttpService){

  };

  translate(){
      console.log('translate');
      this.httpService.post('message','load-all',this.messages) /*TODO Complete me*/
      .subscribe(
        data => {

          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}

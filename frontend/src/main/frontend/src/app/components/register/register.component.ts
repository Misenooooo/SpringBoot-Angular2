import { Component } from '@angular/core';
import { HttpService } from '../../services/register.service'
import {User} from "./model/User";
@Component({
  selector: 'home',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  newUser: User = new User();
  newUserRegistered: boolean;

  constructor(private httpService: HttpService){}

  registerNewUser(){ /*TODO add backend validation errors, add ssuccess message, add frontend validation */
    console.log("Registration form submitted.");
    console.log(this.newUser);
    this.httpService.post('user','register',this.newUser)
      .subscribe(
        data => {
          console.log(data);
          this.newUserRegistered = true;
        },
        error => {
          console.log(error);
        });
  }

}

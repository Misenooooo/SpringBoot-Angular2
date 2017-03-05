import { Component } from '@angular/core';
import { RegisterService } from '../../services/register.service'
@Component({
  selector: 'home',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  constructor(private registerService: RegisterService){}

  onSubmit(){
    console.log("Registration form submitted.");
    this.registerService.sendRegistration("Registration form submitted")
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error)
        });
  }

}

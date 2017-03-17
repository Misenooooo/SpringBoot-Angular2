import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/register.service'
import {FormGroup, FormControl, Validators} from "@angular/forms";

import {User} from "./model/User";
import {passwordMatchValidator} from "../../util/validators";
import {Messages} from "./messages/Messages";

@Component({
  selector: 'home',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit{

  newUser: User = new User();
  submitAttempt: boolean = false;
  newUserRegistered: boolean = false;

  registerForm: FormGroup;

  constructor(private httpService: HttpService){}

  messages:Messages = new Messages(this.httpService);

  ngOnInit(): void {
    this.messages.init();
    this.messages.translate();
    this.registerForm = new FormGroup({
      firstNameField: new FormControl('',Validators.required),
      lastNameField: new FormControl('',Validators.required),
      emailField: new FormControl('',Validators.required),
      passwordField: new FormControl('',Validators.required),
      passwordRepeatField: new FormControl('',Validators.required)
    },passwordMatchValidator);
  }


  testMessage: String = "app.title";

  testMessage(){
    this.httpService.post('message','load',this.testMessage)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        })
  }

  registerNewUser(){ /*TODO add backend validation errors, add success message, ---done--- add frontend validation */
    console.log("Registration form submitted.");
    if (!this.registerForm.valid){
        this.submitAttempt = true;
        return;
    }

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

import { Component } from '@angular/core';

@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class Popover {

  _createUserName = "";
  _createPassword = "";

  text: string;

  constructor() {
    console.log('Hello Popover Component');
    this.text = 'Hello World';
  }

  private addNewUser(){
    //POST to User table, hash PW MD5
  }

  private updateAdminStatus(){
    //isAdmin == true
  }

}

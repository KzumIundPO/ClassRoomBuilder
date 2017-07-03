import { Component } from '@angular/core';

@Component({
  selector: 'seating',
  templateUrl: 'seating.html'
})
export class Seating {

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


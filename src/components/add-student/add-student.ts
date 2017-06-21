import { Component } from '@angular/core';

@Component({
  selector: 'add-student',
  templateUrl: 'add-student.html'
})
export class AddStudent {

  _fname = "";
  _lname = "";

  text: string;

  constructor() {
    console.log('Hello AddStudent Component');
    this.text = 'Hello World';
  }

  private addNewStudent(){
    // POST Student Name and Picture / Class?
  }

}

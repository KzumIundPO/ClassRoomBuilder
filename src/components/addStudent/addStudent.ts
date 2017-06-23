import { Component } from '@angular/core';

@Component({
  selector: 'addStudent',
  templateUrl: 'addStudent.html'
})
export class AddStudent {

  _fname = "";
  _lname = "";
  
  student = {
    "fname": "<blank>",
    "lname": "<blank>",
    "classId": "<blank>",
    "pathToPicture": "/home/aletuna/bla.jpg"
  };

  text: string;

  constructor() {
    console.log('Hello AddStudent Component');
    this.text = 'Hello World';
  }

  private addNewStudent(){
    // POST Student Name and Picture / Class?
    this.student.fname = this._fname;
    this.student.lname = this._lname;

    //picture?


    console.log(this.student);
  }

}

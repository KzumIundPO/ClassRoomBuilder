import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { globalVariables } from "../../pages/home/globalVariables";

@Component({
  selector: 'addStudent',
  templateUrl: 'addStudent.html'
})
export class AddStudent {

  _fname = "";
  _lname = "";

  classes = [];
  
  student = {
    "fname": "<blank>",
    "lname": "<blank>",
    "classId": "<blank>",
    "pathToPicture": "/home/aletuna/bla.jpg"
  };

  text: string;

  constructor(public http: Http, public globalVariables: globalVariables) {
    this.text = 'Hello World';
  }

  private getClasses(){
    this.http.get('http://lyra.b4zz-pony.de:3000/classrooms?token=' + this.globalVariables.token + '&accountId=' + this.globalVariables.accountId).map(res => res.json()).catch(this.handleError).subscribe(data => 
    {data.forEach(element => {
      this.classes.push(element);
    });
    console.log(this.classes);
    });
  }

  private addNewStudent(){
    // POST Student Name and Picture / Class?
    this.student.fname = this._fname;
    this.student.lname = this._lname;
    //getClassId <-> getClass

  /*this.http.post('http://lyra.b4zz-pony.de:3000/students?token=' + this.globalVariables.token + '&accountId=' + this.globalVariables.accountId, this.object).subscribe(res => {
          console.log(res.json());
        }, (err) => {
          console.log(err);
    })*/
    //picture?


    console.log(this.student);
  }

   private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

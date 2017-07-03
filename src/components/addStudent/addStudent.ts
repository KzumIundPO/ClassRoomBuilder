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

  b64s: any;

  student = {
    "fname": "<blank>",
    "lname": "<blank>",
    "classId": "<blank>",
    "picture_base64": ""
  };

  constructor(public http: Http, public globalVariables: globalVariables) {

  }

  private loadPicture(student) {
    var fileInput = (<HTMLInputElement>document.querySelector('input[type=file]')).files[0];
    var reader = new FileReader();

    //Get base64 String from Function
    reader.addEventListener("load", function () {
      let dataURL = reader.result;
      student.picture_base64 = dataURL;
      return dataURL;
    }, false);

    if (fileInput) {
      reader.readAsDataURL(fileInput);
      console.log(fileInput);
    }
    
  }
  
  private itemSelected(item) {
    //class selected
  }

  private addNewStudent() {
    // POST Student Name and Picture / Class?
    this.student.fname = this._fname;
    this.student.lname = this._lname;

    //getClassId <-> getClass
    this.student.classId = this.globalVariables.classForStudent;

    this.http.post('http://lyra.b4zz-pony.de:3000/students?token=' + this.globalVariables.token + '&accountId=' + this.globalVariables.accountId, this.student).subscribe(res => {
            console.log(res.json());
          }, (err) => {
            console.log(err);
      })
    //picture?


    console.log(this.student);
  }

  private handleError(error: Response | any) {
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

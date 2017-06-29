import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { globalVariables } from "../home/globalVariables";


@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class Students {

  students = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public globalVariables: globalVariables) {

  }

  private itemSelected(item) {
    console.log(item);
  }

  private addStudent() {
    //PopUp and PopOver?
    /*this.http.post('http://lyra.b4zz-pony.de:3000/students?token=' + this.globalVariables.token + '&accountId=' + this.globalVariables.accountId, this.object).subscribe(res => {
          console.log(res.json());
        }, (err) => {
          console.log(err);
    })*/
  }

  //Get Students when entering
  ionViewDidLoad() {
    return this.http.get('http://lyra.b4zz-pony.de:3000/students?token=' + this.globalVariables.token + '&accountId=' + this.globalVariables.accountId).map(res => res.json())/*.catch(this.handleError)*/.subscribe(data => {
      data.forEach(element => {
        this.students.push(element);
      });
      console.log(this.students);
    });
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
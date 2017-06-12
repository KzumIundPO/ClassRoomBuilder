import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { globalVariables } from "../home/globalVariables";


@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class Students {

  students = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public globalVariables: globalVariables, public Response: Response) {

}

//Get Students when entering
ionViewDidEnter() {
  this.http.get('http://lyra.b4zz-pony.de:3000/students?token=' + this.globalVariables.token).map(res => res.json()).subscribe(data => {
      data.forEach(element => {
        this.students.push(element);
      });
    });
  }
}
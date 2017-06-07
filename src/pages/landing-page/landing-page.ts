import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { globalVariables } from "../home/globalVariables";
import { Students } from '../students/students';

@IonicPage()
@Component({
  selector: 'page-landing-page',
  templateUrl: 'landing-page.html',
})
export class LandingPage {

  students = [];
  classes = [];
  
  object = {
    "fname": "Peter",
    "lname": "Zufall",
    "class": "E3FI3",
    "pathToPicture": "/home/aletuna/bla.jpg"
  };
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public globalVariables: globalVariables) {
     
  }

  private getClass(){
    this.http.get('http://lyra.b4zz-pony.de:3000/classrooms?token=' + this.globalVariables.token).map(res => res.json()).subscribe(data => {data.forEach(element => {this.classes.push(element)})
    console.log(this.classes);
    })
  }

  private getStudent(){
  this.http.get('http://lyra.b4zz-pony.de:3000/students?token=' + this.globalVariables.token).map(res => res.json()).subscribe(data => {
    data.forEach(element => {
      this.students.push(element);
    });
    console.log(this.students);
  });
  }

private addStudent(){
  this.http.post('http://lyra.b4zz-pony.de:3000/students?token=' + this.globalVariables.token, this.object).subscribe(res => {
        console.log(res.json());
      }, (err) => {
        console.log(err);
	})};
  
  /*
  handleError(error) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
   }
   */

  goToStudent(){
    this.navCtrl.push(Students);
  }

}

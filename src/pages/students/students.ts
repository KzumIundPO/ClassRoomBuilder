import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

/**
 * Generated class for the Students page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-students',
  templateUrl: 'students.html',
})
export class Students {
  students = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

}

  private getStudent(){
    this.http.get('http://lyra.b4zz-pony.de:3000/students').map(res => res.json()).subscribe(data => {
      data.forEach(element => {
        this.students.push(element);
      });
      console.log(this.students);
    });
    }
  }
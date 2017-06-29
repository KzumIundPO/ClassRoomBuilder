import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { globalVariables } from "../home/globalVariables";

@IonicPage()
@Component({
  selector: 'page-seating',
  templateUrl: 'seating.html',
})
export class Seating {

  places = [];
  test = [];

  seating = [];
  classes = [];

  _rows: any;
  _places: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public globalVariables: globalVariables) {

  }

  private createSeatPlan(rows, seats) {
    var sum = rows * seats;
    var maxRows = rows;
    var maxSeats = seats;
    var row_ = [];
    for (var x = 0; x < maxRows; x++) {
      //get current Row
      var currentRow = x;

      for (var y = 0; y < maxSeats; y++) {
        //get current Seat
        if (y <= maxSeats) {
          var currentSeat = y;
        }
        else {
          break;
        }

        //createObject with current numbers
        var obj = {
          studentId: "0",
          x: currentRow,
          y: currentSeat
        };

        for (var index = 0; index < sum; index++) {
          //this.seating[index].push(obj);
          var count1 = 1;
          if (count1 == 1) {
            row_.push(obj);
            count1 = 0;
            break;
          }
          else {
            console.log("3rd for loop, count mistake")
          }
        }
      }
      console.log(row_);
      this.seating.push(row_);
      row_ = [];
    }
    //generate the Grid via Angular
    console.log(this.seating);
  }

  /*private generateGrid(v, w){
    //var e = document.body.getElementsByTagName("ion-content");
    //var e = document.body.getElementsByTagName("main");
    let container = <HTMLElement> document.querySelector("#main");
    let grid = <HTMLElement> document.querySelector("#grid");
    for(var i = 0; i < v; i++){ 
      var row = document.createElement("div"); 
      row.className = "row"; 
      for(var x = 1; x <= w; x++){ 
          var cell = document.createElement("div");
          var n = (i * v) + x;
          var string = n.toString();
          cell.className = "gridsquare"; 
          cell.innerText = string;
          row.appendChild(cell); 
      } 
      container.appendChild(row); 
    } 
  }*/

  private save() {
    return this.http.post('http://lyra.b4zz-pony.de:3000/seating?token=' + this.globalVariables.token + '&accountId=' + this.globalVariables.accountId, this.seating).catch(this.handleError).subscribe(res => {
      console.log(res.json());
    }), (err) => {
      console.log(err);
    };
  }

  private print() {

  }

  private getStudents() {
    console.log("getStudents");
  }

  private showPopUp() {
    console.log("showPopUp");
  }

  //Load classes on entering the view
  ionViewDidEnter() {
    this.http.get('http://lyra.b4zz-pony.de:3000/classes?token=' + this.globalVariables.token + '&accountId=' + this.globalVariables.accountId).map(res => res.json()).catch(this.handleError).subscribe(data => {
      data.forEach(element => {
        this.classes.push(element);
      });
      console.log(this.classes);
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

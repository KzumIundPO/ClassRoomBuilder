import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Seating } from './seating';

@NgModule({
  declarations: [
    Seating,
  ],
  imports: [
    IonicPageModule.forChild(Seating),
  ],
  exports: [
    Seating
  ]
})
export class SeatingModule {}

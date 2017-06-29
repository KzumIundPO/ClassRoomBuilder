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
  ],
  entryComponents: [
    Seating
  ]
})
export class PopoverModule {}

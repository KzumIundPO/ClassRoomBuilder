import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddStudent } from './add-student';

@NgModule({
  declarations: [
    AddStudent,
  ],
  imports: [
    IonicPageModule.forChild(AddStudent),
  ],
  exports: [
    AddStudent
  ]
})
export class AddStudentModule {}

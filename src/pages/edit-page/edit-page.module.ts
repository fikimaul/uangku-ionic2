import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPage } from './edit-page';

@NgModule({
  declarations: [
    EditPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPage),
  ],
  exports: [
    EditPage
  ]
})
export class EditPageModule {}

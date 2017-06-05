import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Daftar } from './daftar';
@NgModule({

  declarations: [
    Daftar,
  ],
  imports: [
    IonicPageModule.forChild(Daftar)
  ],
  exports: [
    Daftar
  ], 
})
export class DaftarModule {}

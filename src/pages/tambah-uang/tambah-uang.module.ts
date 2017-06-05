import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TambahUang } from './tambah-uang';

@NgModule({
  declarations: [
    TambahUang,
  ],
  imports: [
    IonicPageModule.forChild(TambahUang),
  ],
  exports: [
    TambahUang
  ]
})
export class TambahUangModule {}

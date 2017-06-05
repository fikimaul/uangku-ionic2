import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { Uang } from "../../providers/uang";

/**
 * Generated class for the EditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit-page',
  templateUrl: 'edit-page.html',
})
export class EditPage {
	tabel : string;
	id : string;
	nominal:string;
	keterangan:string;
	data: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public uang:Uang,public loadingCtrl:LoadingController,public toast: ToastController) {
  	this.tabel=navParams.get('tabel');
  	this.id=navParams.get('id');
  	this.ambil();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }
  ambil(){
    this.uang.AmbilSatu(this.tabel,this.id).subscribe(
      uang => {
        this.data = uang;
        this.nominal= this.data[0].nominal;
        this.keterangan = this.data[0].catatan;
        console.log(this.keterangan+" "+this.nominal);    
       },
      err => {
        console.log(err);
      },
        () => console.log('Movie Search Complete')
    );
  }
}

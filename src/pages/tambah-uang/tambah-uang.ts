import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController  } from 'ionic-angular';
import { Dashboard } from "../dashboard/dashboard";
import { User } from "../../providers/user";
import { Uang } from "../../providers/uang";

/**
 * Generated class for the TambahUang page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tambah-uang',
  templateUrl: 'tambah-uang.html',
})
export class TambahUang {
  kategori: string = "masuk";
  results: Array<any>;
  loader: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public user:User,public uang:Uang, public loadingCtrl:LoadingController,public toast: ToastController) {
  }
  tambah(id,tabel,nominal,keterangan,jenis,tanggal,jam){
  	console.log(id,tabel,nominal,keterangan,jenis,tanggal.year,tanggal.month,tanggal.day,jam.hour,jam.minute,jam.second);
    this.presentLoading();
      this.uang.TbhUang(id, tabel, nominal, keterangan, jenis,tanggal,jam).subscribe(
        uang => {
          this.results = uang;
          console.log(uang);
            if(this.results[0].status =="sukses")
            {
              let toast = this.toast.create({
                message: 'Berhasil Ditambahkan',
                duration: 3000,
                position: 'middle'
                });

              toast.onDidDismiss(() => {
                console.log('Dismissed toast');
              });

              toast.present();
              this.navCtrl.setRoot(Dashboard);
              this.loader.dismiss();
            }else{
              let toast = this.toast.create({
                message: 'Gagal Ditambahkan',
                duration: 3000,
                position: 'middle'
                });

              toast.onDidDismiss(() => {
                console.log('Dismissed toast');
              });

              toast.present();
              this.loader.dismiss();
            }
        },
        err => {
          console.log(err);
        },
        () => console.log('Movie Search Complete')
    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TambahUang');
  }
  presentLoading() {
        this.loader = this.loadingCtrl.create({
            content: "Loading..."
        });
        this.loader.present();
  }
}

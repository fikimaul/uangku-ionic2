import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { User } from "../../providers/user";
import { Uang } from "../../providers/uang";


@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard {

  pendapatan : number;
  pengeluaran : number;
  kategori: string = "masuk";
  masuk: Array<any>;
  keluar: Array<any>;
  data: Array<any>;
  loader: any;
  selisih: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public user:User,public uang:Uang,public loadingCtrl:LoadingController,public toast: ToastController) {
    this.ambil();
    this.ambilTotal();
    this.ASelisih();
  }

  ambil(){
    this.uang.AmbilUang("uang_masuk",this.user.id).subscribe(
      uang => {
        this.masuk = uang;
        console.log(uang);    
       },
      err => {
        console.log(err);
      },
        () => console.log('Movie Search Complete')
    );
    this.uang.AmbilUang("uang_keluar",this.user.id).subscribe(
      uang => {
        this.keluar = uang;
        console.log(uang);    
       },
      err => {
        console.log(err);
      },
        () => console.log('Movie Search Complete')
    );
  }

  ambilTotal(){
    this.uang.AmbilTotal("uang_masuk",this.user.id).subscribe(
        uang => {
          this.data = uang;
          this.pendapatan = parseInt(this.data[0].total);
          console.log(uang);    
        },
        err => {
          console.log(err);
        },
          () => console.log('Movie Search Complete')
       
    );

    this.uang.AmbilTotal("uang_keluar",this.user.id).subscribe(
        uang => {
          this.data =uang;
          this.pengeluaran = parseInt(this.data[0].total);
          console.log(uang);    
        },
        err => {
          console.log(err);
        },
          () => console.log('Movie Search Complete')
       
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dashboard');
  }

  tbhUang(){
      this.navCtrl.push('TambahUang');
  }
  ASelisih(){
    console.log(this.user.id);
    this.uang.selisih(this.user.id).subscribe(

        uang => {
          this.data = uang;
          this.selisih = parseInt(this.data[0].selisih);
          console.log(uang);    
        },    
    );
  }
  hapus(tabel: string, id:string){
    this.presentLoading();
    console.log('hapus'+tabel+id);
    this.uang.Hapus(tabel,id).subscribe(
        uang => {
          this.data =uang;
          if (this.data[0].status=="sukses"){
            let toast = this.toast.create({
                message: 'Data Berhasil Dihapus',
                duration: 3000,
                position: 'middle'
                });

              toast.onDidDismiss(() => {
                console.log('Dismissed toast');
              });

              toast.present();
              this.loader.dismiss();
              this.ambil();
              this.ambilTotal();
              this.ASelisih();
          }    
        },
        err => {
          console.log(err);
        },
          () => console.log('Movie Search Complete')
       
    );
  }
  presentLoading() {
        this.loader = this.loadingCtrl.create({
            content: "Loading..."
        });
        this.loader.present();
    }
}

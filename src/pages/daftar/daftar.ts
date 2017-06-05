import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController  } from 'ionic-angular';
import { User } from "../../providers/user";
import { HomePage } from "../home/home";
@IonicPage()
@Component({
  selector: 'page-daftar',
  templateUrl: 'daftar.html',
})
export class Daftar {
  results: Array<any>;
  loader: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public user:User, public loadingCtrl:LoadingController,public toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Daftar');
  }
public daftar(nama : string,username :string,password:string)
  {
      this.presentLoading();
      this.user.TbhUser(nama,username,password).subscribe(
        user => {
          this.results = user;
          console.log(user);
            if(this.results[0].status =="sukses")
            {
              let toast = this.toast.create({
                message: 'Selamat Anda Berhasil Mendaftar',
                duration: 3000,
                position: 'middle'
                });

              toast.onDidDismiss(() => {
                console.log('Dismissed toast');
              });

              toast.present();
              this.navCtrl.popTo(HomePage);
              this.loader.dismiss();
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

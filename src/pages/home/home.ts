import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { MenuController } from 'ionic-angular/index';
import { User } from "../../providers/user";
import { Dashboard } from "../dashboard/dashboard";

/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  results: Array<any>;
  loader: any;
  constructor(public navCtrl: NavController, private menu: MenuController, public user:User, public loadingCtrl:LoadingController) {
	 this.menu.close();
	this.menu.swipeEnable(false, 'slide');
  }
	daftar(){
		this.navCtrl.push('Daftar');
	}
	
	login(username :string,password:string){
	  this.presentLoading();
      this.user.ambilUser(username,password).subscribe(
        user => {
          this.results = user;
          console.log(user);
            if(this.results[0].id_user != null)
            {
                this.user.setSession(this.results[0].nama, this.results[0].id_user,this.results[0].username);
                this.navCtrl.setRoot(Dashboard);
            }
            this.loader.dismiss();
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

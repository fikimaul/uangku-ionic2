import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { Dashboard } from '../pages/dashboard/dashboard';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  loader: any;
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any,icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public loadingCtrl:LoadingController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
       { title: 'Beranda', component: Dashboard,icon:"ios-home" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  } 
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  logout(){
    this.presentLoading();
    this.nav.setRoot(HomePage);
  }
   presentLoading() {
        this.loader = this.loadingCtrl.create({
            content: "Loading...",
            duration: 3000,
        });
        this.loader.present();
    }
}

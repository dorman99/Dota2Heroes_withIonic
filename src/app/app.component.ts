import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CompassPage } from '../pages/compass/compass';
import { SettingPage } from '../pages/setting/setting';
import { MapPage } from '../pages/map/map';
import { MainPage } from '../pages/main/main';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  compasPage:any = CompassPage;
  logoutPage:any = SettingPage;
  mainPage:any = MainPage
  landingPage:any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      if(localStorage.getItem('token')) {
        this.landingPage = HomePage
      } else {
        this.landingPage = CompassPage
      }
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  ionViewWillLoad() {
    console.log('ahay')
  }
}


import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HeroesPage } from '../pages/heroes/heroes';
import { HeroesService } from '../services/Heroes.service';
import { HTTP } from '@ionic-native/http'
import { HttpClientModule } from '@angular/common/http'
import { DetailHeroPage } from '../pages/detail-hero/detail-hero';
import { SettingPage } from '../pages/setting/setting';
import { CompassPage } from '../pages/compass/compass';
import { PlacesService } from '../services/Places.service';
import { Geolocation } from '@ionic-native/geolocation';
import { MapPage } from '../pages/map/map';
import { MainPage } from '../pages/main/main';

// import { Storage } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HeroesPage,
    DetailHeroPage,
    SettingPage,
    CompassPage,
    MainPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [ // componentn yang bakal di load harus di masukin ke sini
    MyApp,
    HomePage,
    HeroesPage,
    DetailHeroPage,
    CompassPage,
    SettingPage,
    MapPage,
    MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HeroesService,
    HTTP,
    PlacesService,
    Geolocation
    // Storage
  ]
})
export class AppModule {}

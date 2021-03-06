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


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HeroesPage,
    DetailHeroPage,
    SettingPage,
    CompassPage
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
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HeroesService,
    HTTP
  ]
})
export class AppModule {}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detail-hero',
  templateUrl: 'detail-hero.html',
})
export class DetailHeroPage {
  private hero: any 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad DetailHeroPage',this.navParams.data.heroDetail);
    this.hero = this.navParams.data.heroDetail
    console.log(this.hero,'ini bawah')
  }

}

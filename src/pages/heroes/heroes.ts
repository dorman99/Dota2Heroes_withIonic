import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeroesService } from '../../services/Heroes.service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-heroes',
  templateUrl: 'heroes.html',
})
export class HeroesPage {

  constructor(private HeroesService: HeroesService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeroesPage');
  }

  addHero(value: {name:string}) {
    this.HeroesService.addHero(value,()=>this.navCtrl.popTo(HomePage))
  }

}

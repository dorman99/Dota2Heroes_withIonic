import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'; // untuk controller nav 
import { HeroesPage } from '../heroes/heroes';
import { HeroesService } from '../../services/Heroes.service';
import { DetailHeroPage } from '../detail-hero/detail-hero';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Heroes: {}[] = []
  constructor(public navCtrl: NavController, private HeroesService: HeroesService) {
    this.Heroes = this.HeroesService.fetchingDota2API()
  }

  ionViewDidEnter() {
    console.log('ini jalan kedua')
  }

  ionViewDidLeave() {
    console.log('keluar dari page ')
  }

  detailHero (hero:any) {
    console.log
   this.navCtrl.push(DetailHeroPage,{
     heroDetail: hero
   })
  }

  goToHeroesPage() {
    this.navCtrl.push(HeroesPage)
  }
}
 
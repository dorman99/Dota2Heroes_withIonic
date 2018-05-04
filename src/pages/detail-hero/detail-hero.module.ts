import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailHeroPage } from './detail-hero';

@NgModule({
  declarations: [
    DetailHeroPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailHeroPage),
  ],
})
export class DetailHeroPageModule {}

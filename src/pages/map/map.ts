import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(private viewCtrl: ViewController) {
  }

  onDismiss() {
    this.viewCtrl.dismiss()
  }
}

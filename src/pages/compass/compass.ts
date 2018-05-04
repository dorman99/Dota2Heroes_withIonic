import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacesService } from '../../services/Places.service';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-compass',
  templateUrl: 'compass.html',
})
export class CompassPage {
  private places: any[] = []
  private location: any
  constructor(private PlacesService: PlacesService, private geolocation: Geolocation) {
    this.places =  this.PlacesService.getPlaces()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompassPage',this.places);
  }

  locateMe () {
    console.log('loggg')
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp)
      this.location = resp
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
  }

  findLoc (value: string) {
    this.PlacesService.addNewPlace(value)
  }

}

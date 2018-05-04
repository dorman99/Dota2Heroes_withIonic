import { Injectable } from "@angular/core";
// import { Storage } from '@ionic/storage'

@Injectable()
export class PlacesService {
    private places: any[] = []

    addNewPlace (value: any) {
        this.places.push(value)
    }

    getPlaces () {
        return this.places
    }
}
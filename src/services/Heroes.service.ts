import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroesService {
    http: Observable<any>
    private heroes: any[] = []
    constructor (public httpClient: HttpClient) {
        this.http =  this.httpClient.get('https://api.opendota.com/api/heroStats')
        this.http.subscribe(data => {
           this.heroes.push(...data)
        })
    }

    addHero (hero: {name:string},cb) {
        this.heroes.push(hero)
        cb()
    }

    getHeroes() {
        return this.heroes.slice()
    }

    fetchingDota2API () {
        return this.heroes
    }
}
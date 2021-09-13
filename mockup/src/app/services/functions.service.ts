import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor( private ds : DataService) {}

//Return all heroes
showHeroes(){
  return this.ds.getHeroes();
}

// Return hereo selected
showHero(nameHero:string){
  return this.ds.getHero(nameHero);
}

}


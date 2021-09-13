import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Appearance } from '../models/appearance.model';
import { Biography } from '../models/biography.model';
import { Connections } from '../models/connections.model';
import { Hero } from '../models/hero.model';
import { Powerstats } from '../models/powerstats.model';
import { FunctionsService } from '../services/functions.service';



@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  @Input() heroReceived:string;
loaded:boolean=false;

 hero:Hero;
 powerstats:Powerstats;
 appearance:Appearance;
 biography:Biography;
 connections:Connections;

  constructor(private heroService: FunctionsService) { }

  ngOnChanges() {
    this.showHero();
  }

  ngOnInit(): void {
this.showHero();
  }

showHero(){

  this.heroService.showHero(this.heroReceived).pipe(take(1)).subscribe(
    hero=>{

      this.powerstats = new Powerstats(
         hero ['powerstats'] ['combat'],
         hero ['powerstats'] ['durability'],
         hero ['powerstats'] ['intelligence'],
         hero ['powerstats'] ['power'],
         hero ['powerstats'] ['speed'],
         hero ['powerstats']['strength'] 
      )

      this.appearance = new Appearance(
        hero ['appearance'] ['eyeColor'],
        hero ['appearance'] ['gender'],
        hero ['appearance'] ['hairColor'],
        hero ['appearance'] ['height'] [1],
        hero ['appearance']['race'],
        hero ['appearance'] ['weight'] [1]
      )

       this.biography = new Biography(
        hero ['biography'] ['aliases'],
        hero ['biography'] ['alignment'],
        hero ['biography'] ['alterEgos'],
        hero ['biography']['firstAppearance'],
        hero ['biography']['fullName'],
        hero ['biography']['placeOfBirth'],
        hero ['biography']['publisher']
       )
        
       this.connections = new Connections(
        hero ['connections'] ['groupAffiliation'],
        hero ['connections'] ['relatives'],
       )
   


this.hero = new Hero(
this.heroReceived,
this.powerstats,
this.appearance, 
this.biography,
this.connections,
hero['images']['lg']
);

this.loaded = true;

    },
    error => console.log("Error: "+error)
    );
    
}

}

import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../services/functions.service';
import { take } from 'rxjs/operators';
import { Hero } from '../models/hero.model';

interface Heroes{
   imgUrl:number,
   name:string,
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
 heroes:Heroes[]=[];
clickHero:boolean=false;
heroSelected:string;

  constructor(private heroService: FunctionsService) { }

  ngOnInit(): void {
this.getHeroes();
 }

getHeroes(){
  this.heroService.showHeroes().pipe(take(1)).subscribe(
    heroes=>{
for (let i = 0; i < Object.keys(heroes).length; i++) {
this.heroes.push({
  imgUrl:heroes[i]['images']['xs'],
  name:heroes[i]['name']
})
}
    },
    error => console.log("Error: "+error)
    );
}




onSelect(heroSelected){
this.heroSelected = heroSelected;
this.clickHero = true;
}


}

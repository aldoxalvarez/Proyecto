import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  //Get all hereos
  getHeroes(){
    let httpHeaders = new HttpHeaders()
    .set( 'x-rapidapi-host', 'superhero-search.p.rapidapi.com')
    .set('x-rapidapi-key','8f47a486b2mshad7a37c826d3fbdp161859jsn476d9d4f8df0')
    
    let url = 'https://superhero-search.p.rapidapi.com/api/heroes'

    return this.httpClient.get(url,{headers:httpHeaders});
  }

  // Get hereo selected
  getHero(nameHero){
    let httpHeaders = new HttpHeaders()
    .set( 'x-rapidapi-host', 'superhero-search.p.rapidapi.com')
    .set('x-rapidapi-key','8f47a486b2mshad7a37c826d3fbdp161859jsn476d9d4f8df0')

    let url = 'https://superhero-search.p.rapidapi.com/api/?hero='

    return this.httpClient.get(url+nameHero,{headers:httpHeaders});
  }



}

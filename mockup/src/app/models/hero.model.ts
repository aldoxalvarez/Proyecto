import { Appearance } from "./appearance.model";
import { Biography } from "./biography.model";
import { Connections } from "./connections.model";
import { Powerstats } from "./powerstats.model";

export class Hero {
    constructor(
       public name:string,
       public powerstats:Powerstats,
       public appearance:Appearance,
       public biography:Biography,
       public connections:Connections,
       public img:string
    ){
        
    }
}

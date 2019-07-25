import { Injectable } from '@angular/core';
import { Heroe } from "../interfaces/heroe.interface";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServicioHeroesService {

  public heroes: Heroe[] = [];
  url: string = "http://localhost/heroes/lista_heroes.php";

  constructor(private http: HttpClient) { }

  getHeroesDeArchivo(){
    console.log("Listando heroes...")
    return this.http.get(this.url).pipe(map(
      herServ => {
        this.heroes = JSON.parse(JSON.stringify(herServ));
        console.log(this.heroes);
        return this.heroes;
      }
    ))

  }

  public getHeroesXNombreBiografiaPoderes (termino: string): Heroe[] {
    let heoreCoincideBusqueda: Heroe[] = [];
    termino = termino.toLowerCase();
    
    for (const her of this.heroes) {
      let nombre = her.nombre.toLowerCase();
      let bio = her.bio.toLowerCase();   
      if (nombre.indexOf(termino) >= 0 || bio.indexOf(termino)  >= 0 ) {
        heoreCoincideBusqueda.push(her);          
      }    
      for (const poder of her.poderes) {
        let pod = poder.toLowerCase();
        if (pod.indexOf(termino) >=0) {
          heoreCoincideBusqueda.push(her);          
        } 
      }        
    }
    return heoreCoincideBusqueda;

  }

  public getHeroeXNombre (nombre: string){
    for (const her of this.heroes) {
      if (her.nombre == nombre) {
        console.log("Heroe: "+her.nombre);
        return her;
      }
    }

  }

}

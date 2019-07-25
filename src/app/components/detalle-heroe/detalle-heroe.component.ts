import { Component, OnInit } from '@angular/core';
import { Heroe } from "../../interfaces/heroe.interface";
import { ActivatedRoute } from "@angular/router";
import { ServicioHeroesService } from "../../service/servicio-heroes.service";

@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.component.html',
  styleUrls: ['./detalle-heroe.component.css']
})
export class DetalleHeroeComponent implements OnInit {

  private heroeDetalle: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private herService: ServicioHeroesService) {
    this.activatedRoute.params.subscribe(params =>{
      this.heroeDetalle = this.herService.getHeroeXNombre(params['nombre']);
    })
   }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from "../../interfaces/heroe.interface";
import { Router } from "@angular/router";

@Component({
  selector: 'app-item-heroe',
  templateUrl: './item-heroe.component.html',
  styleUrls: ['./item-heroe.component.css']
})
export class ItemHeroeComponent implements OnInit {

  @Input() heroeInput: Heroe;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public verDetalleHeroe (nombre: string){
    this.router.navigate(['/detalle',nombre]);
  }

}

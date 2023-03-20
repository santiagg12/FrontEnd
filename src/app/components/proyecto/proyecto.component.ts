import { Component, OnInit } from '@angular/core';
import { Educacion } from '../model/educacion';
import { EducacionService } from '../service/educacion.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit{
educacion: Educacion[]= [];

constructor(private educacionS: EducacionService, private tokenService: TokenService){}
isLogged = false;

cargarEducacion(): void {
  this.educacionS.lista().subscribe(data => { this.educacion = data; })
}

ngOnInit(): void {
  this.cargarEducacion();
  if (this.tokenService.getToken()) {
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }
}
delete(id?: number){
  if(id != undefined){
    this.educacionS.delete(id).subscribe(
      data => {
        this.cargarEducacion();
      }, err => {
        alert("No se pudo borrar la experiencia");
      }
    )
  }
}

}
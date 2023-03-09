import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { SExperienciaService } from '../service/s-experiencia.service';
import { TokenService } from '../service/token.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];
  // defaultExpe: Experiencia = { nombreE: 'Nombre predeterminado', descripcionE: 'Descripción predeterminada' };

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.expe = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }}



//   import { Component, OnInit } from '@angular/core';
// import { Experiencia } from '../model/experiencia';
// import { SExperienciaService } from '../service/s-experiencia.service';
// import { TokenService } from '../service/token.service';


// @Component({
//   selector: 'app-experiencia',
//   templateUrl: './experiencia.component.html',
//   styleUrls: ['./experiencia.component.css']
// })
// export class ExperienciaComponent implements OnInit {
//   expe: Experiencia[] = [];
//   defaultExpe: Experiencia = { nombreE: 'Nombre predeterminado', descripcionE: 'Descripción predeterminada' };

//   constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

//   isLogged = false;

//   ngOnInit(): void {
//     this.cargarExperiencia();
//     if (this.tokenService.getToken()) {
//       this.isLogged = true;
//     } else {
//       this.isLogged = false;
//     }
//   }

//   cargarExperiencia(): void {
//     this.sExperiencia.lista().subscribe(data => {
//       if (data.length > 0) {
//         this.expe = data;
//       } else {
//         this.expe = [this.defaultExpe];
//       }
//     }, error => {
//       console.log('Error al cargar la experiencia laboral', error);
//       this.expe = [this.defaultExpe];
//     });
//   }

//   delete(id?: number) {
//     if (id != undefined) {
//       this.sExperiencia.delete(id).subscribe(
//         data => {
//           this.cargarExperiencia();
//         }, err => {
//           alert("No se pudo borrar la experiencia");
//         }
//       )
//     }
//   }
// }

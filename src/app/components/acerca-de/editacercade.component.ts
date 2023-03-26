import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from '../model/persona.model';

import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-editacercade',
  templateUrl: './editacercade.component.html',
  styleUrls: ['./editacercade.component.css']
})
export class EditacercadeComponent implements OnInit {
 persona: persona = null;

constructor(private activatedRouter: ActivatedRoute, private personaS: PersonaService, private router: Router){}

 ngOnInit(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  
  this.personaS.detail(id).subscribe(
    data =>{
      this.persona = data;
    }, err =>{
       alert("Error al modificar");
       this.router.navigate(['']);
    }
  )
  }

onUpdate(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  
  this.personaS.update(id, this.persona).subscribe(
    data => {
      alert('Editado correctamente')
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar la persona");
      this.router.navigate(['']);
    }
  )
}
}

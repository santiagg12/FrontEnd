import { Component, OnInit } from '@angular/core';
import { Skill } from '../model/skill';
import { SkillService } from '../service/skill.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent  implements OnInit{
skill: Skill[] = [];

constructor(private skillS: SkillService, private tokenService: TokenService) {}
isLogged = false;



ngOnInit(): void {
  this.cargarSkills();
if(this.tokenService.getAuthorities().includes('ROLE_ADMIN')){
  this.isLogged=true
}else{
  this.isLogged=false
}
}

cargarSkills(): void{
  this.skillS.lista().subscribe(
    data => {
      this.skill = data;
    }
  )
}

delete(id: number) {
  const confirmation = confirm('¿Está seguro que desea eliminar esta Skill?');
  if (confirmation) {
    if (id != undefined) {
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        },
        err => {
          alert('No se pudo borrar la skill');
        }
      );
    }
  }
}

}


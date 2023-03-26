import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';
import { TokenService } from '../service/token.service';



@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent  implements OnInit{
  persona: persona = null;
  
    constructor(public personaService: PersonaService, private tokenService: TokenService){}
    isLogged = false;

  ngOnInit(): void {
  
    this.nuevaPersona();
  
  if(this.tokenService.getAuthorities().includes('ROLE_ADMIN')){
    this.isLogged=true
  }else{
    this.isLogged=false
  }
  }
    
  
nuevaPersona(){
  this.personaService.detail(1).subscribe(data =>
    {this.persona=data})
}

}
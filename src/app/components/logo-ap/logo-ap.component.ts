import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../service/token.service';
import * as $ from 'jquery';




@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoAPComponent implements OnInit{ 
  isLogged = false;
  constructor(private router:Router, private tokenService: TokenService) { }
ngOnInit(): void {
 if(this.tokenService.getToken()){
    this.isLogged = true;
      }else {
        this.isLogged = false;
      }
      $(document).ready(function() {
        $('.navbar-toggler').click(function() {
          $('.navbar-collapse').slideToggle(300);
        });
      });
    

}
onLogOut():void{
  this.tokenService.logOut();
  window.location.reload();
}
login(){
  this.router.navigate(['/login'])
}


}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from '../model/login-usuario';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  logginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    const loginButton = document.getElementById('loginButton');
    const loading = document.getElementById('loading');
    const errorDiv = document.getElementById('error');
    if (loginButton instanceof HTMLButtonElement) {
      loginButton.disabled = true;
    }
    // deshabilita el botón de inicio de sesión
    loading.style.display = 'block'; // muestra el elemento de carga

    this.logginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.logginUsuario).subscribe(
      (data) => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['']);
        if (loginButton instanceof HTMLButtonElement) {
          loginButton.disabled = false;
        }
        // habilita el botón de inicio de sesión
        loading.style.display = 'none'; // oculta el elemento de carga
      },
      (err) => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
        errorDiv.style.display = 'block'; // muestra el mensaje de error
        if (loginButton instanceof HTMLButtonElement) {
          loginButton.disabled = false;
        }
        // habilita el botón de inicio de sesión
        loading.style.display = 'none'; // oculta el elemento de carga
      }
    );
  }
}

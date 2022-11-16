import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  {Observable } from 'rxjs'
import {tap} from 'rxjs/operators';
import { ResponseLogin } from '../model/response-login';
import { AuthService } from './auth.service';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  public URL = 'http://localhost:8000/usuarios/cadastro'
  public URLb = 'http://localhost:8000/usuarios/login'

  public fazerLogin(usuario: Usuario): Observable<ResponseLogin> {
    return this.httpClient.post<ResponseLogin>(this.URLb, usuario)
      .pipe(
        tap((loginResponse) => {
          this.authService.loginResponse = loginResponse

        })
      ) 
  }

  public cadastrarUsuario(usuario: Usuario):Observable<ResponseLogin> {
    return this.httpClient.post<ResponseLogin>(this.URL, usuario).pipe(
      tap((loginResponse) => {
        this.authService.loginResponse = loginResponse
        
      })
      )
  }
}

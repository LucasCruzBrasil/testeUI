import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  cliente:Cliente
  public URL = 'http://localhost:8000'
  public URLb = 'http://localhost:8000/clientes'

  
  constructor(private http: HttpClient) { }

  clientCreate(cliente: Cliente[]) {
    return this.http.post(this.URLb + '/create', cliente).pipe(
      tap(console.log)
    )
}


  clientList(){
    return this.http.get<Cliente>(this.URL + '/clientes')
    .pipe(
      tap(console.log)
      
    )
  }

  deleteCliente(id): Observable<any> {
    console.log(id);
    return this.http.delete<any>(this.URL + '/clientes/' + id).pipe(
      map(
        retorno => retorno
      ),

      catchError(this.handleError)
    )

  }


  carregarPeloId(id_cliente) {
    return this.http.get<Cliente>(this.URL + '/clientes/' + id_cliente).pipe(tap(console.log))

  }

  upDateCliente(cliente): Observable<any> {
    return this.http.patch<any>(this.URL + '/clientes/', cliente).pipe(tap(console.log)
      , catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };


}

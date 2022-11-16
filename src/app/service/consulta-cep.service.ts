import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }

   /* consultaCEP(cep: string) {

    console.log(cep);

    // variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    // Verifica se campo cep possui valor informado.
    if (cep !== '') {
      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        return this.http.get(`//viacep.com.br/ws/${cep}/json`);
      }
    }

    return of({});
  } 
 */
 
  consultaCEP(cep: string) {
    // variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');
    
    if (cep !== '') {
      console.log('not yet')
      const validacep = /^[0-9]{8}$/;
    }

    return this.http.get(`//viacep.com.br/ws/${cep}/json`).pipe(
      tap(console.log)
    )
  } 
}

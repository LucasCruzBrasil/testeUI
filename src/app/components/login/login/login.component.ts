import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { Usuario } from 'src/app/model/usuario';
import { AuthService } from 'src/app/service/auth.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public usuario: Usuario;

  logimModalRef: BsModalRef
  @ViewChild('telaDeLogin') telaDeLogin
  meuFormGroup: FormGroup;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

    this.usuario = new Usuario()

    this.meuFormGroup = this.formBuilder.group({
      nome: ['nome'],
      email: ['email'],
      senha: ['senha']

    })

  }

  cadastrar() {
    this.loginService.cadastrarUsuario(this.usuario).subscribe(
      (secesso) => {
        console.log('Cadastro', 'Cadastro realizado com sucesso'),
        console.log(secesso)
       /*  this.authService.salvaLocal(secesso.token);
        this.authService.loggedIn() 
        this.router.navigate(['dashboard']) */
        this.loginModal()
      },
      (error) => {
        error => console.log(error);
      }

    )
  }

  loginModal() {
    this.logimModalRef = this.modalService.show(this.telaDeLogin, { class: 'modal-sm' })
  }

  closeModal() {
    this.modalService.hide();
  }


  fazerLogin() {
    console.log("Formulário válido", this.meuFormGroup.value);
    this.loginService.fazerLogin(this.usuario).subscribe(
      (data) => {
        this.router.navigate(['dashboard']);
        this.authService.salvaLocal(data.token);
        this.authService.loggedIn()
        this.closeModal();

      },
      (httpError) => {
        console.log(httpError);
      }

    )
  }




}

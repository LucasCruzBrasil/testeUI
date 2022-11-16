import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { ConsultaCepService } from 'src/app/service/consulta-cep.service';

@Component({
  selector: 'app-dashborad-form',
  templateUrl: './dashborad-form.component.html',
  styleUrls: ['./dashborad-form.component.css']
})
export class DashboradFormComponent implements OnInit {

  formulario: FormGroup
  cliente: Cliente
  confirmationModelRef: BsModalRef;

  @ViewChild('confirmModal') confirmModal;

  constructor(
    private consultaCep: ConsultaCepService,
    private formBuilder: FormBuilder,
    private server: ClienteService,
    private router: Router,
    private alert: BsModalService
  ) { }

  ngOnInit(): void {

    this.cliente = new Cliente();

    this.formulario = new FormGroup({
      nome: new FormControl('',[Validators.required]),
      sobre_nome: new FormControl(''),
      nome_mae: new FormControl(''),
      cpf: new FormControl('',[Validators.required]),
      cep: new FormControl(''),
      logradouro: new FormControl(''),
      bairro: new FormControl(''),
      localidade: new FormControl(''),
      uf: new FormControl(''),
      numero:new FormControl('')
    })



  }

  consultaCepClient(cep) {
    this.cliente.cep = cep
    this.consultaCep.consultaCEP(this.cliente.cep).subscribe(
      res => {
        console.log(res)
        this.upDateForm(res)
      }
    )
  }

  upDateForm(clientes: Cliente[]) {
    this.formulario.patchValue({
       /* nome: clientes['nome'],
       sobre_nome: clientes['sobre_nome'],
       nome_mae: clientes['nome_mae'],
       cpf: clientes['cpf'],  */
      cep: clientes['cep'],
      logradouro: clientes['logradouro'],
      bairro: clientes['bairro'],
      localidade: clientes['localidade'],
      uf: clientes['uf'],
      numero:clientes['numero']


    })
  }


  clientSave() {
    console.log(this.formulario.value);
    this.server.clientCreate(this.formulario.value).subscribe(
      (res) => {
        console.log('salvou')
        this.openModal()
        this.router.navigate(['dashboard/lista'])


      }


    )
  }

  openModal() {
    this.confirmationModelRef = this.alert.show(this.confirmModal, {class:'modal-sm'})
  }

  fecharModal() {
    this.alert.hide();
  }

}

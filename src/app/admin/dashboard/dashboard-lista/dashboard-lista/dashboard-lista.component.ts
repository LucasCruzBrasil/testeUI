import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-dashboard-lista',
  templateUrl: './dashboard-lista.component.html',
  styleUrls: ['./dashboard-lista.component.css']
})
export class DashboardListaComponent implements OnInit {

  clientes: Cliente[];
  cliente: Cliente
  selctionClient: Cliente
  deleteModelRef: BsModalRef;
  formulario: FormGroup



  @ViewChild('deleteModel') deleteModal;
  @ViewChild('edit') editModal;

  constructor(
    private service: ClienteService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.list();
    this.cliente = new Cliente()

    this.formulario = new FormGroup({
      nome: new FormControl(''),
      sobre_nome: new FormControl(''),
      nome_mae: new FormControl(''),
      cpf: new FormControl(''),
      cep: new FormControl(''),
      logradouro: new FormControl(''),
      bairro: new FormControl(''),
      localidade: new FormControl(''),
      uf: new FormControl(''),
      numero: new FormControl(''),
      id_cliente: new FormControl('')
    })
  }

  list() {
    this.service.clientList().subscribe(
      res => {
        this.clientes = res['clientes']
      }
    )
  }

  onDelete(clientes) {

    this.cliente = clientes
    console.log(clientes)
    this.deleteModelRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' })

  }

  delete(id: number) {
    console.log(id)
    this.service.deleteCliente(id).subscribe(
      result => {

        console.log('excluído com sucesso', id)
        this.list();
        this.modalService.hide();
      }
    )

  }

  fecharModal(cliente) {
    this.modalService.hide();
  }

  modal(cliente) {
    this.cliente = cliente
    this.deleteModelRef = this.modalService.show(this.editModal)
    this.service.carregarPeloId(cliente['id_cliente']).subscribe(
      res => {
        this.upDateForm(cliente)
        console.log(res)
      }
    )
  }


  upDateForm(clientes: Cliente[]) {
    this.formulario.patchValue({
      nome: clientes['nome'],
      sobre_nome: clientes['sobre_nome'],
      nome_mae: clientes['nome_mae'],
      cpf: clientes['cpf'],
      uf: clientes['uf'],
      cep: clientes['cep'],
      logradouro: clientes['logradouro'],
      bairro: clientes['bairro'],
      localidade: clientes['localidade'],
      numero: clientes['numero'],
      id_cliente: clientes['id_cliente']

    })

  }

  atualizarCliente(clientes: Cliente) {
    let result$ = this.service.upDateCliente(this.formulario.value)
    result$.subscribe(
      result => {
        console.log(result)
        this.list();
        this.formulario.reset();
        this.modalService.hide();

      }
    )
  }

}

import { Component, OnInit } from '@angular/core';

import { products } from '../../../assets/infos/products';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  dadosForm = {nome: "", empresa: "", email: "", telefone: "", assunto: "", mensagem: ""};
  produtos;

  constructor() { }

  ngOnInit() {
    this.produtos = products;
  }

  sendMail(message) {
    if (this.dadosForm) {
      const recipient = '';
      const mailSubject = 'Formulário de Contato Web';
      var mail = document.createElement("a");
      mail.href = `
      mailto:${recipient}?
      subject=${this.dadosForm.assunto}&
      body=
      Formulário de Contato | Produto: ${this.dadosForm.assunto} \n \n
      Nome: ${this.dadosForm.nome} \n
      Empresa: ${this.dadosForm.empresa} \n
      E-Mail: ${this.dadosForm.email} \n
      Telefone: ${this.dadosForm.telefone} \n
      Mensagem: ${message}
      `;
      mail.click();
    }
  }

}

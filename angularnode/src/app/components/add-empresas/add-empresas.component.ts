import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/models/empresas.model';
import { EmpresasService } from 'src/app/services/empresas.service';




@Component({
  selector: 'app-add-empresas',
  templateUrl: './add-empresas.component.html',
  styleUrls: ['./add-empresas.component.css']
})
export class AddEmpresasComponent implements OnInit {

  empresa: Empresas = {
    cnpj: null,
    nome: '',
    razao: '',
    endereco: '',
    atividade: '',
  };
  submitted = false;
  mask: string;

  constructor(private empresasService: EmpresasService) { }

  ngOnInit(): void {
  }




  salvarEmpresa(): void {
    const data = {
      cnpj: this.empresa.cnpj,
      nome: this.empresa.nome,
      razao: this.empresa.razao,
      endereco: this.empresa.endereco,
      atividade: this.empresa.atividade
    };

    this.empresasService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  novaEmpresa(): void {
    this.submitted = false;
    this.empresa = {
      cnpj: 0,
      nome: '',
      razao: '',
      endereco: '',
      atividade: ''
    };
  }

}

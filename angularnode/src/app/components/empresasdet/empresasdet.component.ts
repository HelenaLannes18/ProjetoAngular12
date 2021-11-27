import { Component, OnInit } from '@angular/core';
import { EmpresasService } from '../../services/empresas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresas } from 'src/app/models/empresas.model';

@Component({
  selector: 'app-empresasdet',
  templateUrl: './empresasdet.component.html',
  styleUrls: ['./empresasdet.component.css']
})
export class EmpresasdetComponent implements OnInit {
  empresaT: Empresas = {
    cnpj: 0,
    nome: '',
    razao: '',
    endereco: '',
    atividade: ''
  };
  message = '';

  constructor(
    private empresaService: EmpresasService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getEmpresa(this.route.snapshot.params.id);
  }

  getEmpresa(id: string): void {
    this.empresaService.get(id)
      .subscribe(
        data => {
          this.empresaT = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }





}


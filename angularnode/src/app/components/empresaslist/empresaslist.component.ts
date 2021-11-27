import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Empresas } from 'src/app/models/empresas.model';
import { EmpresasService } from 'src/app/services/empresas.service';




@Component({
  selector: 'app-empresaslist',
  templateUrl: './empresaslist.component.html',
  styleUrls: ['./empresaslist.component.css']
})
export class EmpresaslistComponent implements OnInit {


  empresas?: Empresas[];
  empresaT: Empresas = {};
  empresaI = -1;
  cnpj = null;
  name?: string;
  nome = '';


  selectedEmpresa?: Empresas;
  onSelect(empresa: Empresas): void {
    this.selectedEmpresa = empresa;
  }
  constructor(private empresasService: EmpresasService) {}

  ngOnInit(): void {
    this.mostrarEmpresas();
  }

  mostrarEmpresas(): void {
    this.empresasService.getAll()
      .subscribe(
        data => {
          this.empresas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.mostrarEmpresas();
    this.empresaT = {};
    this.empresaI = -1;
  }

  setActiveTutorial(empresa: Empresas, index: number): void {
    this.empresaT = empresa;
    this.empresaI = index;
  }



  searchNome(): void {
    this.empresaT = {};
    this.empresaI = -1;

    this.empresasService.findByTitle(this.cnpj)
      .subscribe(
        data => {
          this.empresas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}

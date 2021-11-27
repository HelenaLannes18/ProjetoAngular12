import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaslistComponent } from './components/empresaslist/empresaslist.component';
import { EmpresasdetComponent } from './components/empresasdet/empresasdet.component';
import { AddEmpresasComponent } from './components/add-empresas/add-empresas.component';

const routes: Routes = [
  { path: '', redirectTo: 'empresas', pathMatch: 'full' },
  { path: 'empresas', component: EmpresaslistComponent },
  { path: 'empresas/:id', component: EmpresasdetComponent },
  { path: 'adicionar', component: AddEmpresasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

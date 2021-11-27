import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmpresasComponent } from './components/add-empresas/add-empresas.component';
import { EmpresasdetComponent } from './components/empresasdet/empresasdet.component';
import { EmpresaslistComponent } from './components/empresaslist/empresaslist.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    AddEmpresasComponent,
    EmpresasdetComponent,
    EmpresaslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    Ng2SearchPipeModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

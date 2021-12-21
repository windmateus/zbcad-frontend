import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlataformasRoutingModule } from './plataformas-routing.module';
import { PlataformasListaComponent } from './plataformas-lista/plataformas-lista.component';


@NgModule({
  declarations: [
    PlataformasListaComponent
  ],
  imports: [
    CommonModule,
    PlataformasRoutingModule
  ]
})
export class PlataformasModule { }

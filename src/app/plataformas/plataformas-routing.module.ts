import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlataformasListaComponent } from './plataformas-lista/plataformas-lista.component';

const routes: Routes = [
  { path: '', component: PlataformasListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlataformasRoutingModule { }

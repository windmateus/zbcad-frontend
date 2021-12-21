import { Component, OnInit } from '@angular/core';
import { Plataforma } from '../plataforma';
import { PlataformasService } from '../plataformas.service';

@Component({
  selector: 'app-plataformas-lista',
  templateUrl: './plataformas-lista.component.html',
  styleUrls: ['./plataformas-lista.component.scss']
})
export class PlataformasListaComponent implements OnInit {

  plataformas!: Plataforma[];

  constructor(private service: PlataformasService) { 

  }

  ngOnInit(): void {
    this.service.list().subscribe(
      dados => this.plataformas = dados
    );
  }

}

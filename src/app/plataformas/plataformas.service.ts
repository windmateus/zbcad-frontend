import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Plataforma } from './plataforma'
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PlataformasService {
  private readonly API = 'http://localhost:3000/plataformas';

  constructor (private http: HttpClient) {
    this.list()
  }

  list () {
    return this.http.get<Plataforma[]>(this.API).pipe(tap(console.log))
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.model';
import { DataResult } from 'src/app/models/data-result.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url:string
  constructor(private http: HttpClient) {
    this.url=environment.backend
   }

  fetch ():Observable<Usuario[]>{
    return this.http.get<DataResult>(`${this.url}/usuarios`).pipe(
      map(data=> data.data as Usuario[] || []),
      tap({
        next:(x)=> console.log(x)
      }),
      //map((res)=>JSON.parse(res) as {data?:Usuario[]}),
      //map(data=> data.data || [])
      );
  }


}

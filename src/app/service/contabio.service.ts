import { inject, Injectable } from '@angular/core';
import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { BehaviorSubject, finalize, Observable } from 'rxjs';
import { CaixaData, ContabioMenssagem, Entrada, Saida } from '../model/contabio';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContabioService {
  http = inject(HttpClient)
  API =  environment.SERVIDOR + "/api/v1/";
  private isLoadingSub = new BehaviorSubject<boolean>(false);
  public isLoading = this.isLoadingSub.asObservable();
  constructor() { }


  save(saida: Saida): Observable<ContabioMenssagem>{
  
    return this.http.post<ContabioMenssagem>(this.API+ "saida/save", saida, {responseType: 'json'}  )
    
  }
  
  findAllSaida(): Observable<Saida[]>{
    return this.http.get<Saida[]>(this.API+ "saida/findAll", {responseType: 'json'} )
  }

  removeSaida(id: number): Observable<ContabioMenssagem>{
    return this.http.delete<ContabioMenssagem>(this.API+"saida/deleteById/"+id)
  }
  
  findAllEntrada(): Observable<Entrada[]>{
    return this.http.get<Entrada[]>(this.API+ "entrada/findAll", {responseType: 'json'} )
  }

  findAll(): Observable<CaixaData[]>{
    this.isLoadingSub.next(true)
    return this.http.get<CaixaData[]>(this.API+ "contabio/findAll", {responseType: 'json'} ).pipe(
      finalize(()=>{
        this.isLoadingSub.next(false);
      })
    )
  }

}

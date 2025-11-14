import { inject, Injectable } from '@angular/core';
import { Insumos, ProdutoMenssagem } from '../model/insumo';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, finalize, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class InsumosService {



 http = inject(HttpClient)
  API =  environment.SERVIDOR + "/api/v1/produtos/";
  isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading = this.isLoadingSubject.asObservable(); 

 constructor(){}

 


 getAll(): Observable<Insumos[]>{
  this.isLoadingSubject.next(true);

  return this.http.get<Insumos[]>(this.API+"getAll")
  .pipe(
    finalize(()=>{
      this.isLoadingSubject.next(false)
    })
  )
  
 }

 save(insumos: Insumos): Observable<ProdutoMenssagem>{
  return this.http.post<ProdutoMenssagem>(this.API+"save", insumos);
 }

 deleteById(id: number): Observable<ProdutoMenssagem>{
  return this.http.delete<ProdutoMenssagem>(this.API+"delete/"+id)
 }

 updateById(insumo: Insumos): Observable<ProdutoMenssagem>{

  return this.http.put<ProdutoMenssagem>(this.API+"update/"+insumo.id, insumo)
 }

 updateColumnById(id: number, res: boolean ): Observable<ProdutoMenssagem>{
  return this.http.put<ProdutoMenssagem>(this.API+"updateColumn/"+id, res)
 }


}

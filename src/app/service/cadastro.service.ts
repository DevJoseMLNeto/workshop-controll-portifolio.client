import { inject, Injectable } from '@angular/core';
import { Clientes } from '../model/cliente';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, finalize, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class CadastroService{
  dadosC! : Clientes;
  clientesCadastrados : Clientes[] = []
  clientesEditaveis?: string;
  API =  environment.SERVIDOR + "/api/v1/clientes";
  http = inject(HttpClient)
  private isLoadingSub = new BehaviorSubject<boolean>(false);
  public isLoading = this.isLoadingSub.asObservable();
  constructor(){

  }

  findAll(): Observable<Clientes[]> {
      this.isLoadingSub.next(true);
    return this.http.get<Clientes[]>(this.API+"/get").pipe(
          finalize(()=>{
            this.isLoadingSub.next(false);
          })
        );;
  }

  save(cliente: Clientes): Observable<string> {
    return this.http.post<string>(this.API+"/save", cliente)
  }

  updade(cliente: Clientes, id: number): Observable<string> {
    return this.http.put<string>(this.API+"/update/"+id,cliente)
   
  }

  delete(id: number): Observable<string>{
      this.isLoadingSub.next(true);
    return this.http.delete<string>(this.API+"/delete/"+id, {responseType:'json'})
  }
  
  findBynome(nome: String) : Observable<Clientes[]>{
    return this.http.get<Clientes[]>(this.API+"/findByNome?nome="+nome)
   
  }




  
 
}


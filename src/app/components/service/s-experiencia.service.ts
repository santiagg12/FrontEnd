import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
expURL = 'https://backendms.onrender.com/explab/'

// private url = 'https://backendms.onrender.com/explab/'
// constructor(private http: HttpClient) {}

  constructor(private httpClient: HttpClient) { }
  

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expURL + 'lista');
  }
  public detail(id:number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + "detail"  + "/"  + id);

  }
public save(experiencia: Experiencia): Observable<any>{
  return this.httpClient.post<any>(this.expURL + 'create', experiencia)

}
public update(id: number, experiencia: Experiencia): Observable<any>{
  return this.httpClient.put<any>(this.expURL + "update" + "/" + id, experiencia); 
}
public delete (id:number ): Observable<any>{
  return this.httpClient.delete<any>(this.expURL + 'delete' + "/" + id);
}
}


// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Experiencia } from '../model/experiencia';

// @Injectable({
//   providedIn: 'root'
// })
// export class SExperienciaService {
//   expURL = 'https://backendms.onrender.com/explab/'

//   constructor(private httpClient: HttpClient) { }
  
//   public lista(): Observable<Experiencia[]>{
//     return this.httpClient.get<Experiencia[]>(this.expURL + 'lista');
//   }
  
//   public detail(id:number): Observable<Experiencia>{
//     return this.httpClient.get<Experiencia>(this.expURL + "detail"  + "/"  + id);
//   }
  
//   public save(experiencia: Experiencia): Observable<any>{
//     return this.httpClient.post<any>(this.expURL + 'create', experiencia)
//   }
  
//   public update(id: number, experiencia: Experiencia): Observable<any>{
//     return this.httpClient.put<any>(this.expURL + "update" + "/" + id, experiencia); 
//   }
  
//   public delete (id:number ): Observable<any>{
//     return this.httpClient.delete<any>(this.expURL + 'delete' + "/" + id);
//   }
  
//   public getExperienciaPredeterminada(): Observable<Experiencia> {
//     const experienciaPredeterminada: Experiencia = {
//       id: 0,
//       nombreE: "Mi experiencia laboral",
//       descripcionE: "Aquí puedes agregar tu experiencia laboral"
//     };
//     return new Observable(observer => {
//       observer.next(experienciaPredeterminada);
//       observer.complete();
//     });
//   }
// }


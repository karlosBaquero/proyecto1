import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Propietario} from '../models/propietario';
const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
providedIn: 'root'
})
export class  PropietarioService {
constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string )
    {
      
    }
    addPropietario (Propietario: Propietario): Observable<Propietario> {
      return this.http.post<Propietario>(this.baseUrl+'api/Propietario', Propietario, httpOptions).pipe(
      tap((newPropietario: Propietario) => this.log(`added NewPropietario w/ id=${newPropietario.id}`)),
      catchError(this.handleError<Propietario>('addPropietario'))
      );
    }

    getPropietario(id: number): Observable<Propietario> {
      const url = `${this.baseUrl+'api/Propietario'}/${id}`;
      return this.http.get<Propietario>(url).pipe(
        tap(_ => this.log(`fetched Propietario id=${id}`)),
        catchError(this.handleError<Propietario>(`getPropietario id=${id}`))
      );
    }

    getAll():Observable<Propietario[]>
    {
      return this.http.get<Propietario[]>(this.baseUrl+'api/Propietario').pipe(
      tap(_=>this.log('Se Consulta la información')),
      catchError(this.handleError<Propietario[]>('getAll',[]))
    );
    }

    update (Propietario: Propietario): Observable<any> {
      const url =`${this.baseUrl + 'api/Propietario'}/${Propietario.id}`;
      return this.http.put(url, Propietario, httpOptions).pipe(
      tap(_ => this.log(`updated Propietario id=${Propietario.id}`)),
      catchError(this.handleError<any>('Propietario'))
      );
    }

    delete (Propietario: Propietario | number ): Observable<Propietario> {
      const id = typeof Propietario === 'number' ? Propietario : Propietario.id;
      const url =`${this.baseUrl + 'api/Propietario'}/${id}`;
      
      return this.http.delete<Propietario>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted id=${id}`)),
      catchError(this.handleError<Propietario>('delete'))
      );
    }

      private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
        console.error(error);
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
        };
        }

      private log(message: string) {
        console.log(`PropietarioService: ${message}`);
        }
}
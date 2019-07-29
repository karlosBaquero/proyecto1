import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Abono} from '../models/abono';
const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
providedIn: 'root'
})
export class  AbonoService {
constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string )
    {
      
    }
    addAbono (Abono: Abono): Observable<Abono> {
      
      return this.http.post<Abono>(this.baseUrl+'api/abono', Abono, httpOptions).pipe(
      tap((newAbono: Abono) => this.log(`added NewAbono w/ id=${newAbono.id}`)),
      catchError(this.handleError<Abono>('addAbono'))
      );
    }

    getTotal():Observable<Number>{
      return this.http.get<Number>(this.baseUrl+'api/abono').pipe(
        tap(_=>this.log('Se Consulta la información')),
        catchError(this.handleError<Number>('getTotal'))
      );
    }

    getAll():Observable<Abono[]>
    {
      return this.http.get<Abono[]>(this.baseUrl+'api/abono').pipe(
      tap(_=>this.log('Se Consulta la información')),
      catchError(this.handleError<Abono[]>('getAll',[]))
    );
    }

    update (Abono: Abono): Observable<any> {
      const url =`${this.baseUrl + 'api/abono'}/${Abono.id}`;
      return this.http.put(url, Abono, httpOptions).pipe(
      tap(_ => this.log(`updated Abono id=${Abono.id}`)),
      catchError(this.handleError<any>('Abono'))
      );
    }

    delete (Abono: Abono | number ): Observable<Abono> {
      const id = typeof Abono === 'number' ? Abono : Abono.id;
      const url =`${this.baseUrl + 'api/abono'}/${id}`;
      
      return this.http.delete<Abono>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted id=${id}`)),
      catchError(this.handleError<Abono>('delete'))
      );
    }

      private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
        console.error(error);
        alert(`${operation} failed: ${error.message}`);
        return of(result as T);
        };
        }

      private log(message: string) {
        console.log(`AbonoService: ${message}`);
        }
}
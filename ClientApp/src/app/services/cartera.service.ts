import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cartera} from '../models/Cartera';
const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
providedIn: 'root'
})
export class  CarteraService {
constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string )
    {
      
    }

    addCartera (Cartera: Cartera): Observable<Cartera> {
      return this.http.post<Cartera>(this.baseUrl+'api/cartera', Cartera, httpOptions).pipe(
        tap((newCartera: Cartera) => this.log(`added NewCartera w/ id=${newCartera.id}`)),
      catchError(this.handleError<Cartera>('addCartera'))
      );
    }

    getAll():Observable<Cartera[]>
    {
      return this.http.get<Cartera[]>(this.baseUrl+'api/cartera').pipe(
      catchError(this.handleError<Cartera[]>('getAll',[]))
    );
    }

    getCartera(id: number): Observable<Cartera> {
      const url = `${this.baseUrl+'api/cartera'}/${id}`;
      return this.http.get<Cartera>(url).pipe(
        tap(_ => this.log(`fetched Cartera id=${id}`)),
        catchError(this.handleError<Cartera>(`getCartera id=${id}`))
      );
    }

    update (Cartera: Cartera): Observable<any> {
      const url =`${this.baseUrl + 'api/cartera'}/${Cartera.id}`;
      return this.http.put(url, Cartera, httpOptions).pipe(
      tap(_ => this.log(`updated Cartera id=${Cartera.id}`)),
      catchError(this.handleError<any>('Cartera'))
      );
    }

    delete (Cartera: Cartera | number ): Observable<Cartera> {
      const id = typeof Cartera === 'number' ? Cartera : Cartera.id;
      const url =`${this.baseUrl + 'api/cartera'}/${id}`;
      
      return this.http.delete<Cartera>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted id=${id}`)),
      catchError(this.handleError<Cartera>('delete'))
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
        console.log(`CarteraService: ${message}`);
        }
}
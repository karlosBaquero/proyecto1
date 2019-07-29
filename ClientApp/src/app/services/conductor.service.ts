import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Conductor} from '../models/conductor';
const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
providedIn: 'root'
})
export class  ConductorService {
constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string )
    {
      
    }
    addConductor (conductor: Conductor): Observable<Conductor> {
      return this.http.post<Conductor>(this.baseUrl+'api/Conductor', conductor, httpOptions).pipe(
      tap((newConductor: Conductor) => this.log(`added NewConductor w/ id=${newConductor.id}`)),
      catchError(this.handleError<Conductor>('addConductor'))
      );
    }

    getAll():Observable<Conductor[]>
    {
      return this.http.get<Conductor[]>(this.baseUrl+'api/Conductor').pipe(
      tap(_=>this.log('Se Consulta la información')),
      catchError(this.handleError<Conductor[]>('getAll',[]))
    );
    }

    getConductor(id: number): Observable<Conductor> {
      const url = `${this.baseUrl+'api/Conductor'}/${id}`;
      return this.http.get<Conductor>(url).pipe(
        tap(_ => this.log(`fetched Conductor id=${id}`)),
        catchError(this.handleError<Conductor>(`getConductor id=${id}`))
      );
    }
    update (conductor: Conductor): Observable<any> {
      const url =`${this.baseUrl + 'api/Conductor'}/${conductor.id}`;
      return this.http.put(url, conductor, httpOptions).pipe(
      tap(_ => this.log(`updated conductor id=${conductor.id}`)),
      catchError(this.handleError<any>('conductor'))
      );
    }

    delete (conductor: Conductor | number ): Observable<Conductor> {
      const id = typeof conductor === 'number' ? conductor : conductor.id;
      const url =`${this.baseUrl + 'api/Conductor'}/${id}`;
      
      return this.http.delete<Conductor>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted id=${id}`)),
      catchError(this.handleError<Conductor>('delete'))
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
        console.log(`ConductorService: ${message}`);
        }
}
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Vehiculo } from '../models/vehiculo';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }
  addVehiculo(Vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.post<Vehiculo>(this.baseUrl + 'api/Vehiculo', Vehiculo, httpOptions).pipe(
      tap((newVehiculo: Vehiculo) => this.alertas(`Se ha agregado un nuevo Vehiculo `)),
      catchError(this.handleError<Vehiculo>('addVehiculo'))
    );
  }

  getAll(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.baseUrl + 'api/Vehiculo').pipe(
      tap(_ => this.log('Se Consulta la información')),
      catchError(this.handleError<Vehiculo[]>('getAll', []))
    );
  }

  getVehiculo(id: number): Observable<Vehiculo> {
    const url = `${this.baseUrl + 'api/Vehiculo'}/${id}`;
    return this.http.get<Vehiculo>(url).pipe(
      tap(_ => this.log(`fetched Vehiculo id=${id}`)),
      catchError(this.handleError<Vehiculo>(`getVehiculo id=${id}`))
    );
  }

  update(Vehiculo: Vehiculo): Observable<any> {
    const url = `${this.baseUrl + 'api/Vehiculo'}/${Vehiculo.id}`;
    return this.http.put(url, Vehiculo, httpOptions).pipe(
      tap(_ => this.log(`updated Vehiculo id=${Vehiculo.id}`)),
      catchError(this.handleError<any>('Vehiculo'))
    );
  }

  delete(Vehiculo: Vehiculo | number): Observable<Vehiculo> {
    const id = typeof Vehiculo === 'number' ? Vehiculo : Vehiculo.id;
    const url = `${this.baseUrl + 'api/Vehiculo'}/${id}`;

    return this.http.delete<Vehiculo>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted id=${id}`)),
      catchError(this.handleError<Vehiculo>('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`VehiculoService: ${message}`);
  }
  private alertas(message: string) {
    alert(`${message}`);
  }

}
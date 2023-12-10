import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ErrorService } from '../error/error.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) { }

  getData(requestUrl: any, request: any) {
    var apiUrl =this.baseUrl + requestUrl; 
    return this.http.get(apiUrl, request).pipe(
      tap((data) => { }),

      catchError((error: HttpErrorResponse) => {
        this.errorService.handleError(error);
        return throwError(error);
      }),

      map((data: any) => {
        return data;
      })
    );
  }

  setData(requestUrl: any, request : any) {
    var apiUrl =this.baseUrl + requestUrl; 
    return this.http.post(apiUrl, request, this.httpOptions).pipe(
      tap((data) => { }),

      catchError((error: HttpErrorResponse) => {
        this.errorService.handleError(error);
        return throwError(error);
      }),

      map((data: any) => {
        return data;
      })
    );
  }

  deleteData(requestUrl: any, request: any) {
    var apiUrl =this.baseUrl + requestUrl; 
    return this.http.delete(apiUrl, request).pipe(
      tap((data) => { }),

      catchError((error: HttpErrorResponse) => {
        this.errorService.handleError(error);
        return throwError(error);
      }),

      map((data: any) => {
        return data;
      })
    );
  }

  updateData(requestUrl: any, request: any) {
    var apiUrl =this.baseUrl + requestUrl; 
    return this.http.put(apiUrl, request, this.httpOptions).pipe(
      tap((data) => { }),

      catchError((error: HttpErrorResponse) => {
        this.errorService.handleError(error);
        return throwError(error);
      }),

      map((data: any) => {
        return data;
      })
    );
  }
}

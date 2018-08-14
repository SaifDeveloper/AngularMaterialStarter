import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError,tap} from 'rxjs/internal/operators';
import {User} from './users'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }

  getData(){
    console.log('inside getData')
    return this.http.get(this.url).pipe(
      tap(data =>
        //data can be console logged below
        {console.log(data)}
      ),
      catchError(this.handleError)
    );
  }

  private handleError(err:HttpErrorResponse){
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      // FOR CLIENT SIDE ERRORS
      errorMessage = `An error occured: ${err.error.message}`;
    }else {
      // FOR SERVER SIDE ERRORS
      errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage)
  }
}

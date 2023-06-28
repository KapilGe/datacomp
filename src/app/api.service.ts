import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// const API_URL = 'https://dummy.restapiexample.com/api/v1';
const API_URL = 'https://dummyjson.com/';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public get(): Observable<any> {
    return this.http.get(API_URL + 'products').pipe(map((res) => res));

  }
  public getUserById(id:any): Observable<any> {
    console.log(id);
    return this.http.get(API_URL + 'products/' + id).pipe(map((res) => res));
  }
  public patchById(id:any, val:any): Observable<any> {
    console.log(id, val);
    return val;
    // return this.http.patch(API_URL + 'products/' + id).pipe(map((res)))
  }
  public getProduct(name:any): Observable<any> {
    return this.http
      .get(API_URL + `products/search?q=${name}`)
      .pipe(map((res) => res));
  }
}
// /api/users

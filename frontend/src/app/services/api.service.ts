import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
  }

  get<T>(path: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${path}`);
  }

  post<T>(path: string, body: T): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${path}`, body, this.httpOptions);
  }

  put<T>(path: string, body: T): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${path}`, body, this.httpOptions);
  }

  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${path}`);
  }
}

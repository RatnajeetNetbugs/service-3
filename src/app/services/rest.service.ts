import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  protected readonly http = inject(HttpClient);
  apiUrl = environment.apiUrl;

  private getHeaders() {
    return new HttpHeaders({
      Tenant: 'ex0001', // Replace with the actual tenant value
      'Content-Type': 'application/json',
    });
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + url, data, {
      headers: this.getHeaders(),
    });
  }

  get(url: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + url, {
      headers: this.getHeaders(),
    });
  }
}

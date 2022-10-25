import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { EnvironmentService } from '../services';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MyhttpclientService {

  private baseUrl: string;

  public httpOptions = { 
    headers: new HttpHeaders().append('Access-Control-Allow-Origin', '*')
  };

  constructor(private client: HttpClient, private envServ: EnvironmentService) {
    this.baseUrl = envServ.Get('baseUrl');
   }

   public Get(path: string): Observable<any> {
    return this.client.get(this.baseUrl + path, this.httpOptions);
   }

   public Post(path: string, data: any) {
    this.client.post(this.baseUrl + path, this.httpOptions);
   }
}

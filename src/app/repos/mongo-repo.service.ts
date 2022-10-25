import { Injectable } from '@angular/core';
import { BlogSubject } from '../models';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyhttpclientService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class MongoRepoService {

  constructor(private myClient: MyhttpclientService) { }

  public GetSubjects() : Observable<Array<BlogSubject>> {
    return this.myClient.Get("subject");
  }
}

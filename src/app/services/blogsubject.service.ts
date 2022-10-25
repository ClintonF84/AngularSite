import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BlogSubject } from '../models';
import { MongoRepoService } from '../repos';


@Injectable({
  providedIn: 'root'
})
export class BlogSubjectService {


  constructor(private mongo: MongoRepoService) {
   }

  public getAllsubjects(): Observable<Array<BlogSubject>> {
    return this.mongo.GetSubjects();
  }
}

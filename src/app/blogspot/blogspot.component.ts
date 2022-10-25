import { Component, OnInit } from '@angular/core';
import { BlogSubject } from '../models';
import { BlogSubjectService } from '../services';

@Component({
  selector: 'blogspot',
  templateUrl: 'blogspot.component.html',
  styleUrls: ['blogspot.component.sass']
})
export class BlogspotComponent implements OnInit {

  public titles: Array<BlogSubject> = [];

  constructor(private subjectService: BlogSubjectService) {

   }

  ngOnInit(): void {
    this.subjectService.getAllsubjects().subscribe((resp: any) => {
      resp.subjects.forEach((subjectJson: any) => {
        let subject = new BlogSubject();
        subject.Title = subjectJson.title;
        subject.Guid = subjectJson.guid;

        this.titles.push(subject);
        });
    });
  }
}

import { TestBed } from '@angular/core/testing';

import { BlogSubjectService } from './blogsubject.service';

describe('BlogSubjectService', () => {
  let service: BlogSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

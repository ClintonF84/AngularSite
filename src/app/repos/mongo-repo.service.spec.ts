import { TestBed } from '@angular/core/testing';

import { MongoRepoService } from './mongo-repo.service';

describe('MongoRepoService', () => {
  let service: MongoRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MongoRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

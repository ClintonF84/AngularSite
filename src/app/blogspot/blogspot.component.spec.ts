import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogspotComponent } from './blogspot.component';

describe('BlogspotComponent', () => {
  let component: BlogspotComponent;
  let fixture: ComponentFixture<BlogspotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogspotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogspotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

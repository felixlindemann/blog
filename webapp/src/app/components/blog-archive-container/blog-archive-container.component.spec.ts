import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArchiveContainerComponent } from './blog-archive-container.component';

describe('BlogArchiveContainerComponent', () => {
  let component: BlogArchiveContainerComponent;
  let fixture: ComponentFixture<BlogArchiveContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogArchiveContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArchiveContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubGistComponent } from './github-gist.component';

describe('GithubGistComponent', () => {
  let component: GithubGistComponent;
  let fixture: ComponentFixture<GithubGistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubGistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubGistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetGithubGistComponent } from './widget-github-gist.component';

describe('WidgetGithubGistComponent', () => {
  let component: WidgetGithubGistComponent;
  let fixture: ComponentFixture<WidgetGithubGistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetGithubGistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetGithubGistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

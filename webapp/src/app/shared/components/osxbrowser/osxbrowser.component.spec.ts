import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsxbrowserComponent } from './osxbrowser.component';

describe('OsxbrowserComponent', () => {
  let component: OsxbrowserComponent;
  let fixture: ComponentFixture<OsxbrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsxbrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsxbrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

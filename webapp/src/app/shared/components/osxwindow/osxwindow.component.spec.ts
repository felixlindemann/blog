import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsxwindowComponent } from './osxwindow.component';

describe('OsxwindowComponent', () => {
  let component: OsxwindowComponent;
  let fixture: ComponentFixture<OsxwindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsxwindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsxwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

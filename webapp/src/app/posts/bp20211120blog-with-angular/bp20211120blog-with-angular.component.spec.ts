import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bp20211120blogWithAngularComponent } from './bp20211120blog-with-angular.component';

describe('Bp20211120blogWithAngularComponent', () => {
  let component: Bp20211120blogWithAngularComponent;
  let fixture: ComponentFixture<Bp20211120blogWithAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bp20211120blogWithAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bp20211120blogWithAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

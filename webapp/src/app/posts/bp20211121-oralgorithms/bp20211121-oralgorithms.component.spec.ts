import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bp20211121ORAlgorithmsComponent } from './bp20211121-oralgorithms.component';

describe('Bp20211121ORAlgorithmsComponent', () => {
  let component: Bp20211121ORAlgorithmsComponent;
  let fixture: ComponentFixture<Bp20211121ORAlgorithmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bp20211121ORAlgorithmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bp20211121ORAlgorithmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

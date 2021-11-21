import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bp20081207LatexRootyHelixComponent } from './bp20081207-latex-rooty-helix.component';

describe('Bp20081207LatexRootyHelixComponent', () => {
  let component: Bp20081207LatexRootyHelixComponent;
  let fixture: ComponentFixture<Bp20081207LatexRootyHelixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bp20081207LatexRootyHelixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bp20081207LatexRootyHelixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

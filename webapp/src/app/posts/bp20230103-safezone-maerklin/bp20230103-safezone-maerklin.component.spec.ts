import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bp20230103SafezoneMaerklinComponent } from './bp20230103-safezone-maerklin.component';

describe('Bp20230103SafezoneMaerklinComponent', () => {
  let component: Bp20230103SafezoneMaerklinComponent;
  let fixture: ComponentFixture<Bp20230103SafezoneMaerklinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bp20230103SafezoneMaerklinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bp20230103SafezoneMaerklinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

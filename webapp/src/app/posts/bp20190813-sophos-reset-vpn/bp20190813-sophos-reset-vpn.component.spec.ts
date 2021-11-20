import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bp20190813SophosResetVPNComponent } from './bp20190813-sophos-reset-vpn.component';

describe('Bp20190813SophosResetVPNComponent', () => {
  let component: Bp20190813SophosResetVPNComponent;
  let fixture: ComponentFixture<Bp20190813SophosResetVPNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bp20190813SophosResetVPNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bp20190813SophosResetVPNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

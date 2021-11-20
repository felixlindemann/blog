import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bp20211109UTMSSLVPNComponent } from './bp20211109-utmsslvpn.component';

describe('Bp20211109UTMSSLVPNComponent', () => {
  let component: Bp20211109UTMSSLVPNComponent;
  let fixture: ComponentFixture<Bp20211109UTMSSLVPNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bp20211109UTMSSLVPNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bp20211109UTMSSLVPNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

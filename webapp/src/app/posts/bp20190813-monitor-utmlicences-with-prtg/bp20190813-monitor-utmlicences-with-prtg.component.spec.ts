import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bp20190813MonitorUTMLicencesWithPRTGComponent } from './bp20190813-monitor-utmlicences-with-prtg.component';

describe('Bp20190813MonitorUTMLicencesWithPRTGComponent', () => {
  let component: Bp20190813MonitorUTMLicencesWithPRTGComponent;
  let fixture: ComponentFixture<Bp20190813MonitorUTMLicencesWithPRTGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bp20190813MonitorUTMLicencesWithPRTGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bp20190813MonitorUTMLicencesWithPRTGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

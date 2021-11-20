import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTagCloudComponent } from './widget-tag-cloud.component';

describe('WidgetTagCloudComponent', () => {
  let component: WidgetTagCloudComponent;
  let fixture: ComponentFixture<WidgetTagCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetTagCloudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTagCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

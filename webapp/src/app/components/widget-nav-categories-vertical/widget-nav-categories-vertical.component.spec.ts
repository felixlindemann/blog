import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetNavCategoriesVerticalComponent } from './widget-nav-categories-vertical.component';

describe('WidgetNavCategoriesVerticalComponent', () => {
  let component: WidgetNavCategoriesVerticalComponent;
  let fixture: ComponentFixture<WidgetNavCategoriesVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetNavCategoriesVerticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetNavCategoriesVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

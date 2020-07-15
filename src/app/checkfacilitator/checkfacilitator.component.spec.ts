import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckfacilitatorComponent } from './checkfacilitator.component';

describe('CheckfacilitatorComponent', () => {
  let component: CheckfacilitatorComponent;
  let fixture: ComponentFixture<CheckfacilitatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckfacilitatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckfacilitatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

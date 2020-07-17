import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilatorComponent } from './facilator.component';

describe('FacilatorComponent', () => {
  let component: FacilatorComponent;
  let fixture: ComponentFixture<FacilatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChaperComponent } from './add-chaper.component';

describe('AddChaperComponent', () => {
  let component: AddChaperComponent;
  let fixture: ComponentFixture<AddChaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

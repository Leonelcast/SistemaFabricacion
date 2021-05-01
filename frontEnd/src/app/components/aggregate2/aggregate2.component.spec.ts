import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aggregate2Component } from './aggregate2.component';

describe('Aggregate2Component', () => {
  let component: Aggregate2Component;
  let fixture: ComponentFixture<Aggregate2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aggregate2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aggregate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

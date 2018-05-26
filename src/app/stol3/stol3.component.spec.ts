import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stol3Component } from './stol3.component';

describe('Stol3Component', () => {
  let component: Stol3Component;
  let fixture: ComponentFixture<Stol3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stol3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stol3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

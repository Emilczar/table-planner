import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stol4Component } from './stol4.component';

describe('Stol4Component', () => {
  let component: Stol4Component;
  let fixture: ComponentFixture<Stol4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stol4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stol4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

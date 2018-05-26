import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stol2Component } from './stol2.component';

describe('Stol2Component', () => {
  let component: Stol2Component;
  let fixture: ComponentFixture<Stol2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stol2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stol2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

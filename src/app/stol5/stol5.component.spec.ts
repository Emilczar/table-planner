import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stol5Component } from './stol5.component';

describe('Stol5Component', () => {
  let component: Stol5Component;
  let fixture: ComponentFixture<Stol5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stol5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stol5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

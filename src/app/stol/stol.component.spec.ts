import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StolComponent } from './stol.component';

describe('StolComponent', () => {
  let component: StolComponent;
  let fixture: ComponentFixture<StolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

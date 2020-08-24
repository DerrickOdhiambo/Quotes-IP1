import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifequoteDetailsComponent } from './lifequote-details.component';

describe('LifequoteDetailsComponent', () => {
  let component: LifequoteDetailsComponent;
  let fixture: ComponentFixture<LifequoteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifequoteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifequoteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

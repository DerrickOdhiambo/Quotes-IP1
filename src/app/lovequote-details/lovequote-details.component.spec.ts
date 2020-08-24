import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LovequoteDetailsComponent } from './lovequote-details.component';

describe('LovequoteDetailsComponent', () => {
  let component: LovequoteDetailsComponent;
  let fixture: ComponentFixture<LovequoteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LovequoteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LovequoteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

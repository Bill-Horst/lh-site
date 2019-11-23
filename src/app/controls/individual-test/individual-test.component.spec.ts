import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualTestComponent } from './individual-test.component';

describe('IndividualTestComponent', () => {
  let component: IndividualTestComponent;
  let fixture: ComponentFixture<IndividualTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

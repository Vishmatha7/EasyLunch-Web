import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestReportingComponent } from './test-reporting.component';

describe('TestReportingComponent', () => {
  let component: TestReportingComponent;
  let fixture: ComponentFixture<TestReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

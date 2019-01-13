import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesttransactionComponent } from './testtransaction.component';

describe('TesttransactionComponent', () => {
  let component: TesttransactionComponent;
  let fixture: ComponentFixture<TesttransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesttransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesttransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

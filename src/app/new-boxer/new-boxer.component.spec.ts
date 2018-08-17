import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBoxerComponent } from './new-boxer.component';

describe('NewBoxerComponent', () => {
  let component: NewBoxerComponent;
  let fixture: ComponentFixture<NewBoxerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBoxerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBoxerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

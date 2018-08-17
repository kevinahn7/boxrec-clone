import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBoxerComponent } from './featured-boxer.component';

describe('FeaturedBoxerComponent', () => {
  let component: FeaturedBoxerComponent;
  let fixture: ComponentFixture<FeaturedBoxerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedBoxerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedBoxerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

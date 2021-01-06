import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinterestPinComponent } from './pinterest-pin.component';

describe('PinterestPinComponent', () => {
  let component: PinterestPinComponent;
  let fixture: ComponentFixture<PinterestPinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinterestPinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinterestPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

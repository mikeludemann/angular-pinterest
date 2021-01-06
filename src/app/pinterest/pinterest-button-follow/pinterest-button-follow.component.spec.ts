import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinterestButtonFollowComponent } from './pinterest-button-follow.component';

describe('PinterestButtonFollowComponent', () => {
  let component: PinterestButtonFollowComponent;
  let fixture: ComponentFixture<PinterestButtonFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinterestButtonFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinterestButtonFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

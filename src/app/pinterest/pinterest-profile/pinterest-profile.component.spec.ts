import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinterestProfileComponent } from './pinterest-profile.component';

describe('PinterestProfileComponent', () => {
  let component: PinterestProfileComponent;
  let fixture: ComponentFixture<PinterestProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinterestProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinterestProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

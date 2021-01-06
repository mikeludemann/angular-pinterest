import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinterestBoardComponent } from './pinterest-board.component';

describe('PinterestBoardComponent', () => {
  let component: PinterestBoardComponent;
  let fixture: ComponentFixture<PinterestBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinterestBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinterestBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

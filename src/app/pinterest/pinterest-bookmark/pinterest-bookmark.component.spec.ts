import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinterestBookmarkComponent } from './pinterest-bookmark.component';

describe('PinterestBookmarkComponent', () => {
  let component: PinterestBookmarkComponent;
  let fixture: ComponentFixture<PinterestBookmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinterestBookmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinterestBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

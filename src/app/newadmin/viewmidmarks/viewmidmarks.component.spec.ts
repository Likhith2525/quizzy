import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmidmarksComponent } from './viewmidmarks.component';

describe('ViewmidmarksComponent', () => {
  let component: ViewmidmarksComponent;
  let fixture: ComponentFixture<ViewmidmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmidmarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmidmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

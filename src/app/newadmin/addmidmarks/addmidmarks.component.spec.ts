import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmidmarksComponent } from './addmidmarks.component';

describe('AddmidmarksComponent', () => {
  let component: AddmidmarksComponent;
  let fixture: ComponentFixture<AddmidmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmidmarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmidmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewscoresComponent } from './viewscores.component';

describe('ViewscoresComponent', () => {
  let component: ViewscoresComponent;
  let fixture: ComponentFixture<ViewscoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewscoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewscoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

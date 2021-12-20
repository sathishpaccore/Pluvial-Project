import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluvialAppComponent } from './pluvial-app.component';

describe('PluvialAppComponent', () => {
  let component: PluvialAppComponent;
  let fixture: ComponentFixture<PluvialAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluvialAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluvialAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

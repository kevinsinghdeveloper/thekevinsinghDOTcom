import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireMeComponent } from './hireme.component';

describe('HireMeComponent', () => {
  let component: HireMeComponent;
  let fixture: ComponentFixture<HireMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

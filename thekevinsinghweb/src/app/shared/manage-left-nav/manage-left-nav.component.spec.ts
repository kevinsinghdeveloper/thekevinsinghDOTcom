import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNavComponent } from './manage-left-nav.component';

describe('HeaderComponent', () => {
  let component: ManageNavComponent;
  let fixture: ComponentFixture<ManageNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

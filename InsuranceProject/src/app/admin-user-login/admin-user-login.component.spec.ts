import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserLoginComponent } from './admin-user-login.component';

describe('AdminUserLoginComponent', () => {
  let component: AdminUserLoginComponent;
  let fixture: ComponentFixture<AdminUserLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

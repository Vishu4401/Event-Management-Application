import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEventComponent } from './login-event.component';

describe('LoginEventComponent', () => {
  let component: LoginEventComponent;
  let fixture: ComponentFixture<LoginEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

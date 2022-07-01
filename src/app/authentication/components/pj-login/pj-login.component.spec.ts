import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjLoginComponent } from './pj-login.component';

describe('PjLoginComponent', () => {
  let component: PjLoginComponent;
  let fixture: ComponentFixture<PjLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PjLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PjLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

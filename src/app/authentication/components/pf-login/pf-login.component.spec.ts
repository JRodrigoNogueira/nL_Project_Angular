import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfLoginComponent } from './pf-login.component';

describe('PfLoginComponent', () => {
  let component: PfLoginComponent;
  let fixture: ComponentFixture<PfLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

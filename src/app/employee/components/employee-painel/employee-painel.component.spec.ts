import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePainelComponent } from './employee-painel.component';

describe('EmployeePainelComponent', () => {
  let component: EmployeePainelComponent;
  let fixture: ComponentFixture<EmployeePainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePainelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

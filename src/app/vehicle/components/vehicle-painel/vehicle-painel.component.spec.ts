import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePainelComponent } from './vehicle-painel.component';

describe('VehiclePainelComponent', () => {
  let component: VehiclePainelComponent;
  let fixture: ComponentFixture<VehiclePainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclePainelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclePainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

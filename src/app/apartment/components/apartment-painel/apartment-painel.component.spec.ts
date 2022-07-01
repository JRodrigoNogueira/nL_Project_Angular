import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentPainelComponent } from './apartment-painel.component';

describe('ApartmentPainelComponent', () => {
  let component: ApartmentPainelComponent;
  let fixture: ComponentFixture<ApartmentPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentPainelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentPainelComponent } from './resident-painel.component';

describe('ResidentPainelComponent', () => {
  let component: ResidentPainelComponent;
  let fixture: ComponentFixture<ResidentPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentPainelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

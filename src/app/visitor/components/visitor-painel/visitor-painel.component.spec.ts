import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorPainelComponent } from './visitor-painel.component';

describe('VisitorPainelComponent', () => {
  let component: VisitorPainelComponent;
  let fixture: ComponentFixture<VisitorPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorPainelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

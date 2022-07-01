import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliarDetailsComponent } from './avaliar-details.component';

describe('AvaliarDetailsComponent', () => {
  let component: AvaliarDetailsComponent;
  let fixture: ComponentFixture<AvaliarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliarDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

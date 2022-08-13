import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridIntegrantesComponent } from './grid-integrantes.component';

describe('GridIntegrantesComponent', () => {
  let component: GridIntegrantesComponent;
  let fixture: ComponentFixture<GridIntegrantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridIntegrantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridIntegrantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

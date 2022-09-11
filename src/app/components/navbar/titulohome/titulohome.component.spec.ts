import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulohomeComponent } from './titulohome.component';

describe('TitulohomeComponent', () => {
  let component: TitulohomeComponent;
  let fixture: ComponentFixture<TitulohomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitulohomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitulohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

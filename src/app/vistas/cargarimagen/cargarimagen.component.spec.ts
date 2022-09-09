import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarimagenComponent } from './cargarimagen.component';

describe('CargarimagenComponent', () => {
  let component: CargarimagenComponent;
  let fixture: ComponentFixture<CargarimagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarimagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarimagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

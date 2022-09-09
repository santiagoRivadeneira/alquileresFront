import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarpublicacionComponent } from './generarpublicacion.component';

describe('GenerarpublicacionComponent', () => {
  let component: GenerarpublicacionComponent;
  let fixture: ComponentFixture<GenerarpublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarpublicacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarpublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

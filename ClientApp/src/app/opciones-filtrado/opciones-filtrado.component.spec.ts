import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesFiltradoComponent } from './opciones-filtrado.component';

describe('OpcionesFiltradoComponent', () => {
  let component: OpcionesFiltradoComponent;
  let fixture: ComponentFixture<OpcionesFiltradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionesFiltradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionesFiltradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

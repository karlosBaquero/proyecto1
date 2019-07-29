import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarConductorComponent } from './agregar-conductor.component';

describe('AgregarConductorComponent', () => {
  let component: AgregarConductorComponent;
  let fixture: ComponentFixture<AgregarConductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarConductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

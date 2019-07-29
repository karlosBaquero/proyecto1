import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPropietariosComponent } from './list-propietarios.component';

describe('ListPropietariosComponent', () => {
  let component: ListPropietariosComponent;
  let fixture: ComponentFixture<ListPropietariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPropietariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPropietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

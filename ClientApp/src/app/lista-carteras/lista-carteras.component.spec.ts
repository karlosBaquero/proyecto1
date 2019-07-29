import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCarterasComponent } from './lista-carteras.component';

describe('ListaCarterasComponent', () => {
  let component: ListaCarterasComponent;
  let fixture: ComponentFixture<ListaCarterasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCarterasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCarterasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

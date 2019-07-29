import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarterasComponent } from './carteras.component';

describe('CarterasComponent', () => {
  let component: CarterasComponent;
  let fixture: ComponentFixture<CarterasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarterasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarterasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

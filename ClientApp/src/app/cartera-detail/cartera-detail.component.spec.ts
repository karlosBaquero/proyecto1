import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteraDetailComponent } from './cartera-detail.component';

describe('CarteraDetailComponent', () => {
  let component: CarteraDetailComponent;
  let fixture: ComponentFixture<CarteraDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteraDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteraDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConductoresComponent } from './list-conductores.component';

describe('ListConductoresComponent', () => {
  let component: ListConductoresComponent;
  let fixture: ComponentFixture<ListConductoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConductoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

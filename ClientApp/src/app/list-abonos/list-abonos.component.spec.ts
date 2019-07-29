import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAbonosComponent } from './list-abonos.component';

describe('ListAbonosComponent', () => {
  let component: ListAbonosComponent;
  let fixture: ComponentFixture<ListAbonosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAbonosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAbonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

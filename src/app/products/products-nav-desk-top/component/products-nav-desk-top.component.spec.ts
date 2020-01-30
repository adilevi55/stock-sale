import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNavDeskTopComponent } from './products-nav-desk-top.component';

describe('ProductsNavDeskTopComponent', () => {
  let component: ProductsNavDeskTopComponent;
  let fixture: ComponentFixture<ProductsNavDeskTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsNavDeskTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsNavDeskTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

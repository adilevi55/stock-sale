import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDashboardAllProductsComponent } from './product-dashboard-all-products.component';

describe('ProductDashboardAllProductsComponent', () => {
  let component: ProductDashboardAllProductsComponent;
  let fixture: ComponentFixture<ProductDashboardAllProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDashboardAllProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDashboardAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

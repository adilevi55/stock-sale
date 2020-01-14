import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDashboardNavbarComponent } from './product-dashboard-navbar.component';

describe('ProductDashboardNavbarComponent', () => {
  let component: ProductDashboardNavbarComponent;
  let fixture: ComponentFixture<ProductDashboardNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDashboardNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDashboardNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

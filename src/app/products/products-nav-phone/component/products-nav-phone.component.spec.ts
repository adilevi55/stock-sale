import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNavPhoneComponent } from './products-nav-phone.component';

describe('ProductsNavPhoneComponent', () => {
  let component: ProductsNavPhoneComponent;
  let fixture: ComponentFixture<ProductsNavPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsNavPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsNavPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

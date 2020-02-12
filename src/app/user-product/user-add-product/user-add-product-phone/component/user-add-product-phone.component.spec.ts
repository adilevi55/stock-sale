import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddProductPhoneComponent } from './user-add-product-phone.component';

describe('UserAddProductPhoneComponent', () => {
  let component: UserAddProductPhoneComponent;
  let fixture: ComponentFixture<UserAddProductPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddProductPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddProductPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddProductComponent } from './user-add-product.component';

describe('UserAddProductComponent', () => {
  let component: UserAddProductComponent;
  let fixture: ComponentFixture<UserAddProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddProductDesktopComponent } from './user-add-product-desktop.component';

describe('UserAddProductDesktopComponent', () => {
  let component: UserAddProductDesktopComponent;
  let fixture: ComponentFixture<UserAddProductDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddProductDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddProductDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

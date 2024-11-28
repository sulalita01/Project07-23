import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenudetailPage } from './menudetail.page';

describe('MenudetailPage', () => {
  let component: MenudetailPage;
  let fixture: ComponentFixture<MenudetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

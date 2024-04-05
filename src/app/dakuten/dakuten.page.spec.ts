import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DakutenPage } from './dakuten.page';

describe('DakutenPage', () => {
  let component: DakutenPage;
  let fixture: ComponentFixture<DakutenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DakutenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

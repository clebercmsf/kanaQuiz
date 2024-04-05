import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CombinationPage } from './combination.page';

describe('CombinationPage', () => {
  let component: CombinationPage;
  let fixture: ComponentFixture<CombinationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

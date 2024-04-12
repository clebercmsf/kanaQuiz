import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PraticlePage } from './praticle.page';

describe('PraticlePage', () => {
  let component: PraticlePage;
  let fixture: ComponentFixture<PraticlePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

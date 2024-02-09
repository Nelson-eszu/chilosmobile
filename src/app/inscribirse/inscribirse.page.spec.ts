import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InscribirsePage } from './inscribirse.page';

describe('InscribirsePage', () => {
  let component: InscribirsePage;
  let fixture: ComponentFixture<InscribirsePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InscribirsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

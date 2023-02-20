import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproduitbycategorieComponent } from './viewproduitbycategorie.component';

describe('ViewproduitbycategorieComponent', () => {
  let component: ViewproduitbycategorieComponent;
  let fixture: ComponentFixture<ViewproduitbycategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewproduitbycategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewproduitbycategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

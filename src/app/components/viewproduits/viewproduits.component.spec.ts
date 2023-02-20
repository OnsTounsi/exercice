import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproduitsComponent } from './viewproduits.component';

describe('ViewproduitsComponent', () => {
  let component: ViewproduitsComponent;
  let fixture: ComponentFixture<ViewproduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewproduitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewproduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

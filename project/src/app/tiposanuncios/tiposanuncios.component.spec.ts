import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposanunciosComponent } from './tiposanuncios.component';

describe('TiposanunciosComponent', () => {
  let component: TiposanunciosComponent;
  let fixture: ComponentFixture<TiposanunciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiposanunciosComponent]
    });
    fixture = TestBed.createComponent(TiposanunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

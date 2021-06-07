import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidstoothComponent } from './kidstooth.component';

describe('KidstoothComponent', () => {
  let component: KidstoothComponent;
  let fixture: ComponentFixture<KidstoothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidstoothComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidstoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

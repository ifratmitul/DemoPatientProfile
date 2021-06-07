import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdulttoothComponent } from './adulttooth.component';

describe('AdulttoothComponent', () => {
  let component: AdulttoothComponent;
  let fixture: ComponentFixture<AdulttoothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdulttoothComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdulttoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldRxComponent } from './old-rx.component';

describe('OldRxComponent', () => {
  let component: OldRxComponent;
  let fixture: ComponentFixture<OldRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldRxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToothStructureComponent } from './tooth-structure.component';

describe('ToothStructureComponent', () => {
  let component: ToothStructureComponent;
  let fixture: ComponentFixture<ToothStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToothStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToothStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

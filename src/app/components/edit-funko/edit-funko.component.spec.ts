import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFunkoComponent } from './edit-funko.component';

describe('EditFunkoComponent', () => {
  let component: EditFunkoComponent;
  let fixture: ComponentFixture<EditFunkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFunkoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFunkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFunkoComponent } from './all-funko.component';

describe('AllFunkoComponent', () => {
  let component: AllFunkoComponent;
  let fixture: ComponentFixture<AllFunkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFunkoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFunkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

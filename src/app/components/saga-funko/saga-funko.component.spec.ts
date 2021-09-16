import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagaFunkoComponent } from './saga-funko.component';

describe('SagaFunkoComponent', () => {
  let component: SagaFunkoComponent;
  let fixture: ComponentFixture<SagaFunkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SagaFunkoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SagaFunkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

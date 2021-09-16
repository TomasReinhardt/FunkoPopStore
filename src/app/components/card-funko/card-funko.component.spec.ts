import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFunkoComponent } from './card-funko.component';

describe('CardFunkoComponent', () => {
  let component: CardFunkoComponent;
  let fixture: ComponentFixture<CardFunkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFunkoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFunkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

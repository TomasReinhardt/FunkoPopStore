import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkopopComponent } from './funkopop.component';

describe('FunkopopComponent', () => {
  let component: FunkopopComponent;
  let fixture: ComponentFixture<FunkopopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunkopopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunkopopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

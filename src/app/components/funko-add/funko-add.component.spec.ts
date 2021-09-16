import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoAddComponent } from './funko-add.component';

describe('FunkoAddComponent', () => {
  let component: FunkoAddComponent;
  let fixture: ComponentFixture<FunkoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunkoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunkoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraformComponent } from './compraform.component';

describe('CompraformComponent', () => {
  let component: CompraformComponent;
  let fixture: ComponentFixture<CompraformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

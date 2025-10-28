import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalDetalleComponent } from './modal-detalle.component';

describe('ModalDetalleComponent', () => {
  let component: ModalDetalleComponent;
  let fixture: ComponentFixture<ModalDetalleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ModalDetalleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

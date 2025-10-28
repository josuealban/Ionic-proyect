import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-editar',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule], // 👈 OBLIGATORIO
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.scss'],
})
export class ModalEditarComponent {
  @Input() nombre!: string;
  @Input() telefono!: string;
  @Input() correo!: string;

  constructor(private modalCtrl: ModalController) {}

  guardar() {
    this.modalCtrl.dismiss({
      nombre: this.nombre,
      telefono: this.telefono,
      correo: this.correo,
    });
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }
}

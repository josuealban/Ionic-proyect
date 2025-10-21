import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  
  nombre: string = '';
  telefono: string = '';
  correo: string = '';

  constructor(private toastController: ToastController) {}

 
  async guardarCambios() {
   
    if (!this.nombre || !this.correo) {
      const toast = await this.toastController.create({
        message: 'Por favor, completa al menos tu nombre y correo ⚠️',
        duration: 2500,
        color: 'warning',
      });
      await toast.present();
      return;
    }

   
    const toast = await this.toastController.create({
      message: 'Cambios guardados correctamente ✅',
      duration: 2000,
      color: 'success',
    });
    await toast.present();

   
  }

 
  limpiarCampos() {
    this.nombre = '';
    this.telefono = '';
    this.correo = '';
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-quienes-somos-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './quienesSomos-page.component.html',
})
export class QuienesSomosPageComponent { 
  formData = {
    nombre: '',
    correo: '',
    mensaje: ''
  };

  enviarFormulario() {
    console.log('Formulario enviado:', this.formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    this.formData = { nombre: '', correo: '', mensaje: '' };
  }
}

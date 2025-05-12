import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-a-la-carta',
  templateUrl: './presupuestos-page.component.html',
  styleUrls: ['./presupuestos-page.components.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class PresupuestosPageComponent implements OnInit {
  importForm!: FormGroup;
  formSubmitted = false;

  // Opciones para los selectores
  marcas: string[] = [
    'Mercedes-Benz', 
    'BMW', 
    'Audi', 
    'Porsche', 
    'Volkswagen', 
    'Toyota', 
    'Honda', 
    'Ford',
    'Renault',
    'Seat',
    'Ferrari',
    'Lamborghini'
  ];

  combustibles: string[] = ['Diesel', 'Gasolina', 'Híbrido', 'Eléctrico'];
  kilometrajes: string[] = ['Sin Límite', '0-50.000 km', '50.000-100.000 km', '100.000+ km'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.importForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', [Validators.required, Validators.maxLength(50)]],
      combustible: ['Diesel', Validators.required],
      kilometraje: ['Sin Límite', Validators.required],
      masInformacion: ['', Validators.maxLength(2000)],
      captcha: [false, Validators.requiredTrue]  // validación directa
    });
  }

  // Acceso fácil a los campos del formulario
  get f() {
    return this.importForm.controls;
  }

  isInvalid(campo: string): boolean {
    const control = this.importForm.get(campo);
    return control ? control.invalid && (control.touched || this.formSubmitted) : false;
  }

  onSubmit(): void {
    this.formSubmitted = true;

    if (this.importForm.invalid) {
      this.importForm.markAllAsTouched();
      return;
    }

    console.log('Formulario enviado:', this.importForm.value);
    alert('Formulario enviado correctamente. Nos pondremos en contacto contigo en las próximas 24 horas.');

    this.formSubmitted = false;
    this.importForm.reset({
      combustible: 'Diesel',
      kilometraje: 'Sin Límite'
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalogo-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './catalogo-page.component.html',
})
export class CatalogoPageComponent implements OnInit {
  cochesPorPagina = 8;
  cochesFiltrados: any[] = [];
  coches: any[] = [];
  todosLosCoches: any[] = [];

  marcas: string[] = ['Audi', 'BMW', 'Ford', 'Honda', 'Hyundai', 'Jaguar', 'Mercedes-Benz', 'Nissan', 'Peugeot', 'Renault', 'Seat', 'Skoda', 'Toyota', 'Volkswagen'];
  kilometrajeOptions: string[] = [
    '0 - 20.000 km',
    '20.000 - 50.000 km',
    '50.000 - 100.000 km',
    '100.000 - 150.000 km',
    '+150.000 km'
  ];
  anios: number[] = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];

  filtros = {
    marcas: new Set<string>(),
    combustible: new Set<string>(),
    kilometraje: '',
    anios: new Set<number>()
  };

  paginaActual = 1;

  ngOnInit() {
    this.todosLosCoches = this.obtenerCoches();
    this.cochesFiltrados = [...this.todosLosCoches];
    this.actualizarCochesPaginados();
  }

  obtenerCoches() {
    return [
      {
        id: 1,
        marca: 'Mercedes-Benz',
        modelo: 'C63 AMG 507 Edition',
        combustible: 'Gasolina',
        anio: 2014,
        kilometraje: 160000,
        precio: 84990,
        imagen: 'https://mdgcarcenter.com/wp-content/uploads/2024/08/IMG_9134-2048x1536.jpg',
      },
      {
        id: 2,
        marca: 'Volkswagen',
        modelo: 'Golf GTI MK8',
        anio: 2021,
        combustible: 'Gasolina',
        kilometraje: 80000,
        precio: 32990,
        imagen: 'http://mdgcarcenter.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-10-at-18.56.55-2048x1536.jpeg',
      },
    
      {
        id: 3,
        marca: 'BMW',
        modelo: 'Serie 4 430dA',
        anio: 2016,
        combustible: 'Diesel',
        kilometraje: 113000,
        precio: 28490.00,
        imagen: 'https://mdgcarcenter.com/wp-content/uploads/2025/02/IMG_4928-2048x1536.jpg'
     },
     {
        id: 4,
        marca: 'Honda',
        modelo: 'Civic Type R',
        anio: 2018,
        combustible: 'Gasolina',
        kilometraje: 40500,
        precio: 37990,
        imagen: 'https://mdgcarcenter.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-21-at-18.22.17.jpeg',
    },
    {
      id: 5,
      marca: 'Hyundai',
      modelo: 'I30N',
      anio: 2019,
      combustible: 'Gasolina',
      kilometraje: 88000,
      precio: 25490,
      imagen: 'https://mdgcarcenter.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-20-at-19.50.28-4-2048x1536.jpeg',
    },
    ];
  }

  filtrar() {
    // Reset all filters
    this.filtros.marcas.clear();
    this.filtros.combustible.clear();
    this.filtros.anios.clear();
    this.filtros.kilometraje = '';

    // Get all brand checkboxes - fixing the selector
    const marcaCheckboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
    
    // Process each checkbox
    marcaCheckboxes.forEach(checkbox => {
      if (checkbox.checked) {
        // Check if it's a brand checkbox (value is in the marcas array)
        if (this.marcas.includes(checkbox.value)) {
          this.filtros.marcas.add(checkbox.value);
        }
        // Check if it's a fuel type checkbox
        else if (['Diesel', 'Gasolina'].includes(checkbox.value)) {
          this.filtros.combustible.add(checkbox.value);
        }
        // Check if it's a year checkbox (value can be parsed to a number and is in the years array)
        else {
          const year = parseInt(checkbox.value);
          if (!isNaN(year) && this.anios.includes(year)) {
            this.filtros.anios.add(year);
          }
        }
      }
    });

    // Process kilometraje radio buttons
    const radioKilometraje = document.querySelector<HTMLInputElement>('input[type="radio"][name="km"]:checked');
    if (radioKilometraje) {
      this.filtros.kilometraje = radioKilometraje.value;
    }

    // Apply all filters
    this.cochesFiltrados = this.todosLosCoches.filter(coche => {
      const coincideMarca = this.filtros.marcas.size === 0 || this.filtros.marcas.has(coche.marca);
      const coincideCombustible = this.filtros.combustible.size === 0 || this.filtros.combustible.has(coche.combustible);
      const coincideAnio = this.filtros.anios.size === 0 || this.filtros.anios.has(coche.anio);
      const coincideKm = this.coincideKilometraje(coche.kilometraje, this.filtros.kilometraje);

      return coincideMarca && coincideCombustible && coincideAnio && coincideKm;
    });

    // Reset to first page after filtering
    this.paginaActual = 1;
    this.actualizarCochesPaginados();
  }

  coincideKilometraje(km: number, filtro: string): boolean {
    switch (filtro) {
      case '0 - 20.000 km': return km <= 20000;
      case '20.000 - 50.000 km': return km > 20000 && km <= 50000;
      case '50.000 - 100.000 km': return km > 50000 && km <= 100000;
      case '100.000 - 150.000 km': return km > 100000 && km <= 150000;
      case '+150.000 km': return km > 150000;
      default: return true;
    }
  }

  actualizarCochesPaginados(): void {
    const inicio = (this.paginaActual - 1) * this.cochesPorPagina;
    const fin = inicio + this.cochesPorPagina;
    this.coches = this.cochesFiltrados.slice(inicio, fin);
  }

  paginaAnterior(): void {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.actualizarCochesPaginados();
    }
  }

  paginaSiguiente(): void {
    const totalPaginas = Math.ceil(this.cochesFiltrados.length / this.cochesPorPagina);
    if (this.paginaActual < totalPaginas) {
      this.paginaActual++;
      this.actualizarCochesPaginados();
    }
  }
}
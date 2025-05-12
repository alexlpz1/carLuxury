import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { RouterModule } from '@angular/router'; // Ya tienes este import

@Component({
  selector: 'app-coche-detail-page',
  standalone: true,  // Si estás usando Angular 14 o superior, esta opción es necesaria para componentes independientes
  imports: [CommonModule, RouterModule], // Asegúrate de incluir CommonModule
  templateUrl: './coche-detail-page.component.html', // Cambié la plantilla al archivo correcto
})
export class CocheDetailPageComponent implements OnInit {
  coche: any = null;  // Aquí almacenaremos el coche actual
  currentImageIndex: number = 0;
  isModalOpen: boolean = false;

  coches = [
    {
      id: 1,
      marca: 'Mercedes-Benz',
      modelo: 'C63 AMG 507 Edition',
      descripcion: 'Edition 507 Coupe',
      edad: '2014',
      combustible: 'Gasolina',
      trasmision: 'Automático',
      color: 'Amarillo',
      kilometraje: '160.000 km',
      cv: '507',
      precio: '84,990.00 €',
      imagen: 'https://mdgcarcenter.com/wp-content/uploads/2024/08/IMG_9134-2048x1536.jpg',
      imagenes: [
        'https://mdgcarcenter.com/wp-content/uploads/2024/08/IMG_9122-2048x1536.jpg',
        'https://mdgcarcenter.com/wp-content/uploads/2024/08/IMG_9117-2048x1536.jpg',
        'https://mdgcarcenter.com/wp-content/uploads/2024/08/IMG_9114-2048x1536.jpg',
        'https://mdgcarcenter.com/wp-content/uploads/2024/08/IMG_9119-2048x1536.jpg',
        'https://mdgcarcenter.com/wp-content/uploads/2024/08/IMG_9116-2048x1536.jpg',
        'https://mdgcarcenter.com/wp-content/uploads/2024/08/IMG_9142-scaled.jpg',
      ],
      extras: {
        descripcionGeneral: `UNIDAD MUY EXCLUSIVA
        YA QUE SE TRATA DE UN 507 EDITION CON KIT BLACK SERIES
        
        -TODO HOMOLOGADO EN FICHA TÉCNICA`,
        equipamiento: [
          'Kit completo Blackseries Original (Paragolpes, capó, taloneras, alerón carbono, aletas delanteras y traseras, discos de freno flotantes, colas de escape, etc)',
          'Llantas BC Forged de magnesio 20″',
          'Linea de escape completa en titanio Akrapovic Evolution',
          'Colectores largos superspring',
          'Admisión carbono Grouppe M',
          'Filtro alto caudal BMC',
         
          
        ]
      }
    },
    
    {
      id: 2,
      marca: 'Volswagen',
      modelo: 'Golf GTI MK8',
      descripcion: '2.0 TSI DSG',
      edad: '2021',
      combustible: 'Gasolina',
      trasmision: 'Automático',
      color: 'Negro',
      kilometraje: '80.000 km',
      cv: '245',
      precio: '32,990.00 €',
      imagen: 'http://mdgcarcenter.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-10-at-18.56.55-2048x1536.jpeg',
      imagenes: [
        'http://mdgcarcenter.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-10-at-18.56.55-2048x1536.jpeg',
        'https://mdgcarcenter.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-10-at-18.58.30-scaled.jpeg',
        'https://mdgcarcenter.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-10-at-18.56.55-4-2048x1536.jpeg',
        'https://mdgcarcenter.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-10-at-18.56.55-2-2048x1536.jpeg',
        'https://mdgcarcenter.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-10-at-18.56.52-2048x1536.jpeg',
        'https://mdgcarcenter.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-10-at-19.48.56-2048x1536.jpeg',
      ],
      extras: {
        descripcionGeneral: `Vehículo con todo el mantenimiento en servicio oficial VOLKSWAGEN.
        Lámina PPF en todo el vehículo.
        
        - TODO HOMOLOGADO EN FICHA TÉCNICA`,
        equipamiento: [
          'Llantas GTI Club sport',
          'Techo panorámico/corredizo eléctric. regulable.',
          'Sonido Harman Kardon',
          'Asientos eléctricos con memorias',
          'Asientos calefactables y ventilados',
          'Volante calefactable',
          'Faros Matrix LED (IQ.Light)',
          'Discover pro',
          'Bola remolque abatible',
          'Aire acondicionado Climatronic 3 zonas incl. mando en el fondo',
          'Etc..'
        ]
      }
    },
    
    {
      id: 3,
      marca: 'BMW',
      modelo: 'Serie 4 430dA',
      descripcion: 'xDrive Gran Coupe',
      edad: '2016',
      combustible: 'Diesel',
      trasmision: 'Automático',
      color: 'Gris',
      kilometraje: '113.000 km',
      cv: '258',
      precio: '28,490.00 €',
      imagen: 'https://mdgcarcenter.com/wp-content/uploads/2025/02/IMG_4928-2048x1536.jpg',
      imagenes: [
        'https://mdgcarcenter.com/wp-content/uploads/2025/02/IMG_4928-2048x1536.jpg',
        'https://mdgcarcenter.com/wp-content/uploads/2025/02/IMG_4898-2048x1536.jpg',
        'https://mdgcarcenter.com/wp-content/uploads/2025/02/IMG_4931-2048x1536.jpg',
        'https://mdgcarcenter.com/wp-content/uploads/2025/02/IMG_4905-2048x1536.jpg',
        'https://mdgcarcenter.com/wp-content/uploads/2025/02/IMG_4920-2048x1536.jpg',
        'https://mdgcarcenter.com/wp-content/uploads/2025/02/IMG_4932-2048x1536.jpg',
      ],
      extras: {
        descripcionGeneral: `Vehículo con todo el mantenimiento en servicio oficial BMW.
        - TODO HOMOLOGADO EN FICHA TÉCNICA`,
        equipamiento: [
          'Llantas 19″ M',
          'Suspensión M adaptativa',
          'Faros LED',
          'Navegador Professional',
          'Asientos deportivos M',
          'Volante M',
          'Techo de cristal panorámico',
          'Etc..'
        ]
      }
    },
    {
      id: 4,
      marca: 'Honda',
      modelo: '	Civic Type R',
      descripcion: 'IVTEC TURBO TYPE R GT',
      edad: '2018',
      combustible: 'Gasolina',
      trasmision: 'Manual',
      color: 'Negro',
      kilometraje: '40.500 km',
      cv: '320',
      precio: '37,990.00 €',
      imagen: 'https://mdgcarcenter.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-21-at-18.22.17.jpeg',
      imagenes: [
        'https://mdgcarcenter.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-21-at-18.22.17.jpeg',
        'http://mdgcarcenter.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-21-at-19.21.30-2048x1536.jpeg',
        'https://mdgcarcenter.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-21-at-19.21.31-2048x1536.jpeg',
        'https://mdgcarcenter.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-21-at-19.21.29-1-2048x1536.jpeg',
        'https://mdgcarcenter.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-21-at-19.21.45-2048x1536.jpeg',
        'https://mdgcarcenter.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-21-at-19.21.31-1-2048x1536.jpeg',
      ],
      extras: {
        descripcionGeneral: `Vehículo con todo el mantenimiento en servicio oficial HONDA.
        - TODO HOMOLOGADO EN FICHA TÉCNICA`,
        equipamiento: [
          'Llantas 20″',
          'Suspensión adaptativa',
          'Faros LED',
          'Navegador',
          'Asientos deportivos',
          'Volante calefactable',
          'Etc..'
        ]
      }
    },
    {
      id: 5,
      marca: '	Hyundai',
      modelo: 'I30N',
      descripcion: 'TGDI 2.0 275CV N PERFORM SKY',
      edad: '2019',
      combustible: 'Gasolina',
      trasmision: 'Manual',
      color: 'Gris',
      kilometraje: '88.000 km',
      cv: '275',
      precio: '25,490.00 €',
      imagen: 'https://mdgcarcenter.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-20-at-19.50.28-4-2048x1536.jpeg',
      imagenes: [
        'https://mdgcarcenter.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-20-at-19.50.28-4-2048x1536.jpeg',
        'https://mdgcarcenter.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-20-at-19.50.24-2048x1536.jpeg',
        'https://mdgcarcenter.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-20-at-19.50.25-scaled.jpeg',
        'https://mdgcarcenter.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-20-at-19.50.28-1-scaled.jpeg',
        'https://mdgcarcenter.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-20-at-19.50.26-scaled.jpeg',
        'https://mdgcarcenter.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-20-at-19.50.23-2048x1536.jpeg',
      ],
      extras: {
        descripcionGeneral: `Vehículo con todo el mantenimiento en servicio oficial HYUNDAI.
        - TODO HOMOLOGADO EN FICHA TÉCNICA`,
        equipamiento: [
          'Llantas 19″',
          'Suspensión adaptativa',
          'Faros LED',
          'Navegador',
          'Asientos deportivos',
          'Volante calefactable',
          'Etc..'
        ]
      }
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el parámetro 'id' de la ruta
    const id = +this.route.snapshot.paramMap.get('id')!;  // El '+' convierte el valor a un número
    // Buscar el coche con el id
    this.coche = this.coches.find(c => c.id === id);
    if (!this.coche) {
      // Si no se encuentra el coche, manejar el error (podrías redirigir a otra página o mostrar un mensaje de error)
      console.error('Coche no encontrado');
    }
  }
  openImageModal(index: number): void {
    this.currentImageIndex = index;
    this.isModalOpen = true;
  }

  closeImageModal(): void {
    this.isModalOpen = false;
  }

  prevImage(): void {
    if (this.coche?.imagenes?.length) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.coche.imagenes.length) % this.coche.imagenes.length;
    }
  }

  nextImage(): void {
    if (this.coche?.imagenes?.length) {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.coche.imagenes.length;
    }
  }
  
  
}

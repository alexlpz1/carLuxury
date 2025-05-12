import { Routes } from '@angular/router';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { CatalogoPageComponent } from './pages/catalogo-page/catalogo-page.component';
import { PresupuestosPageComponent } from './pages/presupuestos-page/presupuestos-page.component';
import { VentasPageComponent } from './pages/ventas-page/ventas-page.component';
import { BajoPedidoPageComponent } from './pages/bajoPedido-page/bajoPedido-page.component';
import { QuienesSomosPageComponent } from './pages/quienesSomos-page/quienesSomos-page.component';
import { CocheDetailPageComponent } from './pages/coche-detail-page/coche-detail-page.component'; // Asegúrate de tener este componente

export const routes: Routes = [
    {
        path: 'inicio',
        component: InicioPageComponent
    },
    {
        path: 'catalogo',
        component: CatalogoPageComponent
    },
    {
        path: 'coche/:id',  // Asegúrate de que esta ruta esté correctamente definida
        component: CocheDetailPageComponent
    },
    {
        path: 'bajo-pedido',
        component: BajoPedidoPageComponent
    },
    {
        path: 'quienes-somos',
        component: QuienesSomosPageComponent
    },
    {
        path: 'presupuestos',
        component: PresupuestosPageComponent
    },
    {
        path: 'ventas',
        component: VentasPageComponent
    },
    {
        path: '**', 
        redirectTo: '/inicio'
    }
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { DetailComponent } from './detail/detail.component';
import { ReservationComponent } from './reservation/reservation.component';


export const routes: Routes = [
    { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
    { path: 'acceuil', component: PagePrincipalComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: "inscription", component: InscriptionComponent },
    { path: "detail/:id", component: DetailComponent },
    {path:"reservation",component:ReservationComponent}
    
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }
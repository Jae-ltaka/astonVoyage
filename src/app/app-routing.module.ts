import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { DetailComponent } from './detail/detail.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AuthenticateCanActivate } from './guard/authentication.guard';
import { BookingReservationComponent } from './booking-reservation/booking-reservation.component';
import { ReservationComponent } from './reservation/reservation.component';


export const routes: Routes = [
    { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
    { path: 'acceuil', component: PagePrincipalComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: "inscription", component: InscriptionComponent },
    { path: "detail/:id", component: DetailComponent },
    {path:"booking-reservation",component:BookingReservationComponent,canActivate:[AuthenticateCanActivate]},

    {path:"reservations",component:ReservationsComponent,canActivate:[AuthenticateCanActivate]},
    {path:"reservation/:id", component:ReservationComponent,canActivate:[AuthenticateCanActivate]}
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ],
    providers:[AuthenticateCanActivate]
})
export class AppRoutingModule { }
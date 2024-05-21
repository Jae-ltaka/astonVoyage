import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';




import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {MatCardModule} from '@angular/material/card';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {MatMenuModule} from '@angular/material/menu';
import { ReservationsComponent } from './reservations/reservations.component';
import{ ReservationComponent} from './reservation/reservation.component';
import { BookingReservationComponent } from './booking-reservation/booking-reservation.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ValiderComponent } from './valider/valider.component';
import { HeaderButtonsComponent } from './header-buttons/header-buttons.component';




@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    PagePrincipalComponent,
    DetailComponent,
    ReservationsComponent,
    ReservationComponent,
    BookingReservationComponent,
    ValiderComponent,
    HeaderButtonsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    MatMenuModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

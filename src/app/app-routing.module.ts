import { NgModule } from '@angular/core';
import { Routes ,RouterModule} from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';


export const routes: Routes = [
  {path:'connexion',component:ConnexionComponent},
  {path:"inscription",component:InscriptionComponent}
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {}
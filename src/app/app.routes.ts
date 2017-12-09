import { RouterModule } from '@angular/router';
import { PersonnageListComponent } from './personnage/personnage-list/personnage-list.component';
import { PersonnageDetailComponent } from './personnage/personnage-detail/personnage-detail.component';

const appRoutes = [
  { path: '', component: PersonnageListComponent },
  { path: 'persolist', component: PersonnageListComponent },
  { path: 'perso', component: PersonnageDetailComponent }
];

export const routes = RouterModule.forRoot(appRoutes);

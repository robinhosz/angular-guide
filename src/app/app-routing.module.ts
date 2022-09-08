import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { PagehomeComponent } from './components/pagehome/pagehome.component';
import { TitleComponent } from './components/title/title.component';
import { ReactiveFormsComponent } from './coomponents/reactive-forms/reactive-forms.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {path: '', component: PagehomeComponent, pathMatch: 'full' },
  {path: 'forms', component: FormsComponent },
  {path: 'reactive', component: ReactiveFormsComponent },
  {path: 'dashboard', 
  loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule)},
  {path: '404', component: PageErrorComponent },
  {path: '**', redirectTo: '404'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

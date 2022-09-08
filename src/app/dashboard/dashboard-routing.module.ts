import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagehomeComponent } from '../components/pagehome/pagehome.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

    {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }

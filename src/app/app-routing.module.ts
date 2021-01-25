import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ErrorpageComponent } from './components/error/errorpage/errorpage.component';

const routes: Routes = [
  { path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 

}

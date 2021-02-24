import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorpageComponent } from './components/error/errorpage/errorpage.component';
import { AccountComponent } from 'src/app/components/account/account.component';
import { CryptocurrenciesComponent } from './components/cryptocurrencies/cryptocurrencies.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { WhitepapersComponent } from './components/blogs/whitepapers/whitepapers.component';
import { BlogcategoriesComponent } from './components/blogs/blogcategories/blogcategories.component';
import { AuthGuard } from './components/common/auth.guard';
import { VideosComponent } from './components/videos/videos.component';


const routes: Routes = [
  { path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'account', component: AccountComponent,
    canActivate: [AuthGuard] },
  { path: 'cryptocurrencies', component: CryptocurrenciesComponent},
  { path: 'blogs',
    children: [
      {path: "", redirectTo: "categoies", pathMatch: "full"},
      {path: "categoies", component: BlogcategoriesComponent},
      {path: "whitepapers", component: WhitepapersComponent}
    ] },
  { path: 'contracts', loadChildren: () => import('./components/contracts/contracts.module').then(m => m.ContractsModule) },
  { path: 'Videos', component: VideosComponent},
  { path: '**', component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 

}

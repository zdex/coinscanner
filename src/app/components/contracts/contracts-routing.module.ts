import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractClientComponent } from './contract-client/contract-client.component';

const routes: Routes = [
  { path: 'client', component: ContractClientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractsRoutingModule { }

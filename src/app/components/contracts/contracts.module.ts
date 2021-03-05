import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';

import { ContractClientComponent } from './contract-client/contract-client.component';
//import {TransferService} from './contractServices/transfer.service';

@NgModule({
  declarations: [ContractClientComponent],
  imports: [
    CommonModule,
    ContractsRoutingModule
  ],
  providers: []
})
export class ContractsModule { }

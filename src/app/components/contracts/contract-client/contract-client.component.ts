import { Component, OnInit } from '@angular/core';
import { LotteryService } from '../contractServices/lottery.service';
//import { Buffer } from "buffer"

@Component({
  selector: 'app-contract-client',
  templateUrl: './contract-client.component.html',
  styleUrls: ['./contract-client.component.scss'],
})
export class ContractClientComponent implements OnInit {
  
  constructor(private service: LotteryService) {}
  contractBalance: string;
  manager;
  playersCount;
  winnerAddress;
  winnerAddressIndex;

  ngOnInit(): void {
    //this.service.getUserBalance().then(balance => this.balance = balance);
    //this.service.setupManager();
    this.fincContractBalance();
    this.findContractManger();
    this.getPlayersCount();
  }

  async fincContractBalance() {
    this.contractBalance = await this.service.findContractBalance();
    console.log('bal: ' + this.contractBalance);
  }
 
  async findContractManger() {
    
    this.manager = await this.service.findManager();
    console.log("Manager: " + this.manager);

  }

  onSubmit (e) {
    this.service.enterPlayer();    
  }
 
  async pickWinner(e) {
    e.preventDefault();
    debugger
    this.service.pickWinner();    
    this.winnerAddress = await this.service.getWinnerAddress();
    this.winnerAddressIndex = await this.service.getWinnerAddressIndex();
  };

  async getPlayersCount() {
    
    this.playersCount = await this.service.getPlayersCount();
    
    console.log("count: "+ this.playersCount);
  }

  async findWinner() {
    this.winnerAddress = await this.service.getWinnerAddress();
    this.winnerAddressIndex = await this.service.getWinnerAddressIndex();
  }
}

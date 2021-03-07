import { Injectable, OnInit } from '@angular/core';
import Web3 from 'web3';
import { ethers, providers } from 'ethers';
import { WindowRefService } from 'src/app/services/window-ref.service';
declare let require: any;
declare let window: any;

const tokenAbi = require('../contractUtils/abi.json');

@Injectable({
  providedIn: 'root',
})
export class LotteryService implements OnInit {
  private _account: string = null;
  private _web3: any;
  private _accountsList: any;
  private _tokenContract: any;
  //private _tokenContractAddress: string =    '0x4F07A2a6aE9aDD75A1986B659BD3B7902D072F87'; // ganache contract
  private _tokenContractAddress: string =  '0x9e4C385394CB81d34342FaD3cFfD7e4ac5d98d2c'; //rinkeby
  private abi = tokenAbi;
  private manager;
  private contractBalance: number;
  private provider;
  private wallet;
  private signer;
  ethe: number = 2;
  constructor(private winService: WindowRefService) {
    let network = null;
    if (typeof window.ethereum !== 'undefined'){
    window.ethereum.enable();
    this.provider = new ethers.providers.Web3Provider(window.ethereum);
    //this.provider = new ethers.providers.JsonRpcProvider("http://localhost:8500")
    //this.provider = new providers.Web3Provider(window.ethereum)
    this.signer = this.provider.getSigner();
    network = (this.provider.getNetwork()).chainId
    
    const accts = this.provider.listAccounts();
 
    this._tokenContract = new ethers.Contract(
      this._tokenContractAddress,
      this.abi,
      this.signer
    );
    }
   

   
    this.wallet = this.provider.getSigner(0);
    
    this._tokenContract = this._tokenContract.connect(this.wallet);
    console.log('contract is created: ' + this._tokenContract);
  }

  ngOnInit(): void {}
  async findContractBalance(): Promise<Number> {
    
    this.contractBalance = await this.provider.getBalance(
      this._tokenContract.address
    );
    console.log('Contract Balance: ' + this.contractBalance);
    return this.contractBalance;
  }
  async findManager() : Promise<any>{
    
    this.manager = await this._tokenContract.manager();
    console.log('manager: ' + this.manager);
    return this.manager;
  }

  public async enterPlayer() {
    debugger
    const s = this.provider.getSigner(1);
    const add = s.address;
    const e = ethers.utils.parseEther('2.0');
    const add1 = await this.signer.getAddress();
    console.log("this.wallet address: " + add1);
    await this._tokenContract.enter(add1, {
      value: e
    });
    debugger
    console.log("player is entered");
  }
  public async pickWinner() {
    debugger
    await this._tokenContract.chooseWinner().then(result => {
      debugger
      console.log("result: " + result);
    });
    debugger
    console.log("winner is picked");
  }

  public async getPlayersCount(): Promise<Number> {
    
    const count = await this._tokenContract.totalPlayersEntered();
    
    return count;
  }
}

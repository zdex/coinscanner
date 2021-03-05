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
  private _tokenContractAddress: string =
    '0x881AF6F887b315e20A9819ed28aeFEC5523aE73e'; //rinkeby
  private abi = tokenAbi;
  private manager;
  private contractBalance: number;
  private provider;
  private wallet;
  ethe: number = 2;
  constructor(private winService: WindowRefService) {
    let network = null;
    if (typeof window.ethereum !== 'undefined'){
    window.ethereum.enable();
    this.provider = new ethers.providers.Web3Provider(window.ethereum);
    
    //this.provider = new providers.Web3Provider(window.ethereum)
    const signer = this.provider.getSigner();
    network = (this.provider.getNetwork()).chainId
   /* this._tokenContract = new ethers.Contract(
      this._tokenContract.networks[network].address,
      this.abi,
      signer
    );*/
    this._tokenContract = new ethers.Contract(
      this._tokenContractAddress,
      this.abi,
      signer
    );
    }
    //const web3Provider = new Web3.providers.HttpProvider('http://localhost:8545'); //need to look into this

    //if (typeof window.web3 !== 'undefined') {

    /*  if (typeof window.ethereum !== 'undefined') {
        debugger
      //this._web3 = new Web3(this.winService.nativeWindow.web3.currentProvider);

      this._web3 = new Web3(window.ethereum.currentProvider);
      //this._web3 = new Web3('ws://localhost:8500');
      // this._web3 = new Web3(Web3.givenProvider || 'ws://localhost:8500');

      // if (this._web3 && this._web3.version.network !== '4') {
      // alert('Please connect to the Rinkeby network');
      //}
    } else {
      console.warn(
        'Please use a dapp browser like mist or MetaMask plugin for chrome'
      );
    }
*/
    /*this._tokenContract = new this._web3.eth.Contract(
      this.abi,
      this._tokenContractAddress
    );*/

   
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

    await this._tokenContract.enter({ 
      from: '0x3B186493eD99570FA8fCD4755b4cB611142fc15E',   
      value: e,
    });
    debugger
    console.log("player is entered");
  }
  public async pickWinner() {
    debugger
    await this._tokenContract.chooseWinner();
    debugger
    console.log("winner is picked");
  }

  public async getPlayersCount(): Promise<Number> {
    
    const count = await this._tokenContract.totalPlayersEntered();
    
    return count;
  }
  /*
  public async enter() {
    debugger;
    this._account = await this._web3.eth.getAccounts();
    await this._tokenContract.methods.enter(this._account[0]).send({
      from: this._account[0],
      value: this._web3.utils.toWei('2', 'ether'),
      gas: 1000000,
    });
  }
  public async getUserBalance(): Promise<number> {
    debugger;
    let balance = await this._web3.eth.getBalance(this._account[0]);
    return balance;
  }

  async isManager() {
    const accounts = await this._web3.eth.getAccounts();
    console.log(accounts[0]);
    return accounts[0] === this.manager;
  }
  */
}

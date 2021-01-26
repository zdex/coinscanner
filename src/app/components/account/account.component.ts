import { Component, OnInit } from '@angular/core';
import { RippleService } from 'src/app/services/ripple.service';
import { Account } from 'src/app/models/accountModels';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  account: any;

  accountForm = new FormGroup({
    accountAddress: new FormControl('')    
  });
    
  showVolume: boolean = false;

  constructor(private service: RippleService) { }

  ngOnInit(): void {
   // this.getAccount();
  }

  getAccount() {
    debugger
    console.log(this.accountForm.value);
    console.log(this.accountForm.value.accountAddress);
    this.service.getAccount(this.accountForm.value.accountAddress).subscribe((data: Account) => {
      console.log(JSON.stringify(data));
      this.account = {
        result: (data as any).result,
      }
     },
     (error) => { 
       console.log("Error in response");
       this.account = {
        result: "error"
      }
     }
    );
  }

  getVolume() {
    this.showVolume = true;
  }

}

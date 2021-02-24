import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { RippleService } from 'src/app/services/ripple.service';
import { ExchangeVolume, GraphData, VolumeRowData } from 'src/app/models/accountModels';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';




@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.scss']
})
export class VolumeComponent implements OnInit {
  exchangeVolume?: ExchangeVolume ;
  rowData: VolumeRowData[] = [];
  private _items = [];
  graphData: GraphData;
  displayedColumns: string[] = ['Count', 'Rate', 'Amount', 'Base Currency', 'Base Issuer', 'Counter Currency', 'Counter Issuer', 'Converted Amount'];

  dataSource = new MatTableDataSource<VolumeRowData>([]);

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  
  showGraphFlag:boolean = false;
  
  constructor(private service: RippleService) {
    
  }

  ngOnInit(): void {
    this.getVolume();
    
  }

  getVolume() {
    
    this.service.getExchangeVolume('USD', 'rMwjYedjc7qqtKYVLiAccJSmCwih4LnE2q').subscribe((data: ExchangeVolume) => {
      console.log(JSON.stringify(data));
      this.exchangeVolume = data;
      this.exchangeVolume = {
        result: (data as ExchangeVolume).result,
        count: (data as ExchangeVolume).count,
        rows: (data as ExchangeVolume).rows,
      };
      this.assembleVolumeData(data);
      this.dataSource = new MatTableDataSource(this.rowData);
     
    },
      (error) => {
        console.log("Error in response");
        this.exchangeVolume = {
          result: error.result
        }
      }
    );
  }
//ETH, BTC, EUR, CNY
  assembleVolumeData(data: any) {
    let row: VolumeRowData; 
    let btcCount = 0;
    let ethCount = 0;
    let eurCount = 0;
    let cnyCount = 0;

    data.rows[0].components.filter((element)=> {
      return element.base.currency !== 'XRP' && element.counter.currency !== 'XRP';
    }).forEach(element => {
     row = {
      count: element.count,
      rate: element.rate,
      amount: element.amount,
      base_currency: element.base.currency,
      base_issuer: element.base.issuer,
      counter_currency: element.counter.currency,
      counter_issuer: element.counter.issuer,
      converted_amount: element.converted_amount
    
     }
       
     if(element.base.currency === 'BTC') {
      btcCount += 1; 

    } else if(element.base.currency === 'ETH') {
      ethCount += 1; 

    } else if(element.base.currency === 'EUR') {
      eurCount += 1; 

    } else if(element.base.currency === 'CNY') {
      cnyCount += 1; 
    } 
   
     this.rowData.push(row);
    });
    console.log("btcCount : " + btcCount + " ethCount : " + ethCount + " eurCount : " + eurCount + " cnyCount : " + cnyCount);
    
    this.graphData = {
      ETH: ethCount,
      BTC: btcCount,
      EUR: eurCount,
      CNY: cnyCount 
    }

    console.log("grapth data btcCount : " + this.graphData.BTC + " ethCount : " + this.graphData.ETH + " eurCount : " + this.graphData.EUR + " cnyCount : " + this.graphData.CNY);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  showGraph() {
    this.showGraphFlag = true;
  }
}

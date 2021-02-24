import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { RippleService } from 'src/app/services/ripple.service';
import { ExchangeVolume, GraphData, CryptoCurrenciesModel } from 'src/app/models/accountModels';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.scss']
})
export class CryptocurrenciesComponent implements OnInit {
  cryptocurrencies: any;
  rowData: CryptoCurrenciesModel[] = [];
  private _items = [];
  graphData: GraphData;
  displayedColumns: string[] = ['Rank', 'Name', 'Symbol', 'Circulating Supply', 'Total Supply', 'Max Supply'];

  dataSource = new MatTableDataSource<CryptoCurrenciesModel>([]);

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  
  showGraphFlag:boolean = false;
  
  constructor(private service: RippleService) {
    
  }

  ngOnInit(): void {
    this.getListCryptocurrencies();
    
  }

  getListCryptocurrencies() {
    
    this.service.getListCryptocurrencies().subscribe((data) => {
      debugger
      console.log(JSON.stringify(data));
      this.cryptocurrencies = data;
      /*this.cryptocurrencies = {
        result: data.result,
        count: data.count,
        rows: data.rows,
      }; */
      this.assembleData(data);
      this.dataSource = new MatTableDataSource(this.rowData);
     
    },
      (error) => {
        console.log("Error in response");
        this.cryptocurrencies = {
          result: error.result
        }
      }
    );
  }
//ETH, BTC, EUR, CNY
  assembleData(data: any) {
    let row: CryptoCurrenciesModel; 

    data.cryptocurrentyList.forEach(element => {
     row = {
      cmc_rank: element.cmc_rank,
      name: element.name,
      symbol: element.symbol,
      circulating_supply: element.circulating_supply,
      total_supply: element.total_supply,
      max_supply: element.max_supply    
     }
   
     this.rowData.push(row);
    });
    
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
}

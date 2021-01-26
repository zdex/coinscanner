export interface Account {
  result: string;
  account_data: {
    account: string;
    parent: string;
    initial_balance: string;
    inception: string;
    ledger_index: number;
    tx_hash: string;
  }
}

export interface ExchangeVolume {
  result: string;
  count?: number;
  rows?: {
    components: [{
      count: number,
      rate: number,
      amount: number,
      base: {
        currency: string;
        issuer: string;
      },
      counter: {
        currency: string;
        issuer: string;
      },
      converted_amount: number
    }]
  }
}

export interface AppConfig {
  inputStyle?: string;
  dark?: boolean;
  theme?: string;
  ripple?: boolean;
}

export interface GraphData {
  ETH: number;
  BTC: number;
  EUR: number;
  CNY: number;  
}
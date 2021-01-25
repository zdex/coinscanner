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
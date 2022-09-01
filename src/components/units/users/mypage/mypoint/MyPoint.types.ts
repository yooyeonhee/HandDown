export interface IFetchPointTransactions {
  _id: string;
  amount: number;
  balance: number;
  status: string;
  createdAt: Date;
  useditem: {
    price: number;
  };
}
export interface IMyPointUIProps {
  pointData: {
    fetchPointTransactions: Array<IFetchPointTransactions>;
  };
}

import { MouseEvent } from "react";

export interface IFetchPointTransactions {
  _id: string;
  amount: number;
  balance: number;
  status: string;
  createdAt: Date;
  useditem?: {
    price: number;
  };
}
export interface ITableOption {
  isSelect: boolean;
}
export interface IMyPointUIProps {
  pointData: {
    fetchPointTransactions: Array<IFetchPointTransactions>;
  };
  buyingData: {
    fetchPointTransactionsOfBuying: Array<IFetchPointTransactions>;
  };
  sellingData: {
    fetchPointTransactionsOfSelling: Array<IFetchPointTransactions>;
  };
  loadingData: {
    fetchPointTransactionsOfLoading: Array<IFetchPointTransactions>;
  };
  optionSelect: boolean[];
  onClickOption: (event: MouseEvent<HTMLDivElement>) => void;
  option: string;
}

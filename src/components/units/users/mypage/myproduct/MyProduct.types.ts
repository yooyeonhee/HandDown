import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { MouseEvent } from "react";

export interface ISeller {
  name: string;
}
export interface IFetchUseditemsISold {
  _id: string;
  name: string;
  price: number;
  createdAt: Date;
  soldAt: Date;
}
export interface IFetchUseditemsIPicked {
  _id: string;
  name: string;
  price: number;
  createdAt: Date;
  soldAt: Date;
  seller: ISeller;
}
export interface IMyProductUIProps {
  ProductData: {
    fetchUseditemsISold: Array<IFetchUseditemsISold>;
  };
  refetchProductData: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
  ProductDataCount: {
    fetchUseditemsCountISold: number;
  };
  onClickOption: (event: MouseEvent<HTMLDivElement>) => void;
  option: string;
  PickedData: {
    fetchUseditemsIPicked: Array<IFetchUseditemsIPicked>;
  };
  PickedDataCount: {
    fetchUseditemsCountIPicked: number;
  };
  refetchPickedData: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
}

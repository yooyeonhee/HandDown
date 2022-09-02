import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";

export interface IUser {
  name: string;
  email: string;
}
export interface IFetchUseditemQuestions {
  _id: string;
  user: IUser;
  contents: string;
  createdAt: Date;
}
export interface IUsedItemAddress {
  address: string;
  addressDetail: string;
  lat: number;
  lng: number;
}
export interface ISeller {
  name: string;
  email: String;
}
export interface IFetchUsedItem {
  _id?: string;
  name: string;
  remarks: string;
  contents: string;
  price: number;
  images: Array<string>;
  pickedCount: number;
  createdAt: Date;
  useditemAddress: IUsedItemAddress;
  seller: ISeller;
}
export interface AnswerItemProps {
  el: IFetchUseditemQuestions;
  answerRefetch: (
    variables?:
      | Partial<{
          useditemQuestionId: string;
        }>
      | undefined
  ) => Promise<ApolloQueryResult<any>>;
}
export interface IAnswerItemUIProps {
  el: IFetchUseditemQuestions;
  loginData: {
    fetchUserLoggedIn: IUser;
  };
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => Promise<void>;
}

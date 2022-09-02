import { Dispatch, SetStateAction } from "react";

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
export interface IFetchUserLoggedIn {
  email: string;
  name: string;
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
export interface IQuestionItemProps {
  el: IFetchUseditemQuestions;
  setAnswerAddress: Dispatch<SetStateAction<string>>;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;
  itemData: {
    fetchUseditem: IFetchUsedItem;
  };
}
export interface IQuestionListUIProps {
  questionData: {
    fetchUseditemQuestions: Array<IFetchUseditemQuestions>;
  };
  loadFunc: any;
  loginData: IFetchUserLoggedIn;
  isAnswer: boolean;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;
  answerAddress: string;
  setAnswerAddress: Dispatch<SetStateAction<string>>;
  itemData: {
    fetchUseditem: IFetchUsedItem;
  };
}
export interface IQuestionListProps {
  itemData: {
    fetchUseditem: IFetchUsedItem;
  };
}

import { MouseEvent } from "react";

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
export interface IFetchUserLoggedIn {
  name: string;
  _id?: string;
  email: string;
}
export interface IDetailUIProps {
  itemData: {
    fetchUseditem: IFetchUsedItem;
  };
  userData: {
    fetchUserLoggedIn: IFetchUserLoggedIn;
  };
  onClickPick: () => void;
  mainImg: string;
  onClickSubImage: (event: MouseEvent<HTMLImageElement>) => void;
  showBuyConfirm: () => void;
  onClickToEdit: () => void;
}

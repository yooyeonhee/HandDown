import { Dispatch, MouseEvent, SetStateAction } from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IUsedItemAddress {
  address: string;
  addressDetail: string;
  lat: number;
  lng: number;
  zipcode?: string;
}
export interface ISeller {
  name: string;
  email: String;
}
export interface IFetchUseditem {
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
export interface INewProps {
  isEdit: boolean;
  productData: {
    fetchUseditem: IFetchUseditem;
  };
}
export interface IDaumPostcode {
  zonecode: string;
  address: string;
}
export interface IUseditemAddress {
  address?: string;
  addressDetail?: string;
  lat?: number;
  lng?: number;
}
export interface IFiles {
  url: string;
}
export interface ICreateUseditem {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
  images: Array<IFiles>;
  useditemAddress?: IUseditemAddress;
}
export interface IUpdateUseditemInput {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
  images?: Array<string>;
  pickedCount?: number;
  createdAt?: Date;
  useditemAddress?: {
    address?: string;
    addressDetail?: string;
    lat?: number;
    lng?: number;
    zipcode?: string;
  };
}
export interface IData {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
  addressDetail?: string;
}
export interface INewUIProps {
  onChangeFiles: (index: number, url: string) => void;
  fileUrls: Array<string>;
  onClickCheckTrade: (event: MouseEvent<HTMLInputElement>) => void;
  checkTrade: string;
  onClickCancel: () => void;
  addressShowModal: () => void;
  addressHandleOk: () => void;
  addressHandleCancel: () => void;
  isAddressModalVisible: boolean;
  addressHandleComplete: (data: IDaumPostcode) => void;
  onClickSubmit: (data: IData) => Promise<void>;
  register: UseFormRegister<IData>;
  handleSubmit: UseFormHandleSubmit<IData>;
  onChangeContents: (value: string) => void;
  address: string;
  setLng: Dispatch<SetStateAction<number>>;
  setLat: Dispatch<SetStateAction<number>>;
  postCode: string;
  isEdit: boolean;
  productData: {
    fetchUseditem: IFetchUseditem;
  };
  onClickUpdate: (data: IData) => Promise<void>;
}

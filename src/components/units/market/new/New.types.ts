import { MouseEvent } from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { IUsedItemAddress } from "../detail/Detail.types";

export interface IDaumPostcode {
  zonecode: string;
  address: string;
}
export interface IUseditemAddress {
  address: string;
  addressDetail: string;
  lat: number;
  lng: number;
}
export interface IFiles {
  url: string;
}
export interface ICreateUseditem {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  images: Array<IFiles>;
  useditemAddress: IUseditemAddress;
}
export interface IData {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  addressDetail: string;
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
}

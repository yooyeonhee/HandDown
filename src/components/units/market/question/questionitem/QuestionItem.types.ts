import { Dispatch, MouseEvent, SetStateAction } from "react";

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
export interface IQuestionItemProps {
  el: IFetchUseditemQuestions;
  setAnswerAddress: Dispatch<SetStateAction<string>>;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;
  itemData: {
    fetchUseditem: IFetchUsedItem;
  };
}

export interface IQuestionItemUIProps {
  el: IFetchUseditemQuestions;
  loginData: {
    fetchUserLoggedIn: IUser;
  };
  onClickDelete: () => Promise<void>;
  showModal: (event: MouseEvent<HTMLImageElement>) => void;
  handleOk: () => void;
  handleCancel: () => void;
  isModalVisible: boolean;
  onClickAnswer: (event: MouseEvent<HTMLImageElement>) => Promise<void>;
  address: string;
  onClickUpdate: (event: MouseEvent<HTMLImageElement>) => Promise<void>;
  isEdit: boolean;
  setAddress: Dispatch<SetStateAction<string>>;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  itemData: {
    fetchUseditem: IFetchUsedItem;
  };
}

// export interface IQuestionItemProps {
//   el: IFetchUseditemQuestions;
//   setAddress: Dispatch<SetStateAction<string>>;
//   setIsEdit: Dispatch<SetStateAction<boolean>>;
// }

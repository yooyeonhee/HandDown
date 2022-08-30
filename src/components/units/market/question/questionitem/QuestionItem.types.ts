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
  // onClickAnswer: (event: MouseEvent<HTMLImageElement>) => Promise<void>;
  address: string;
  onClickUpdate: (event: MouseEvent<HTMLImageElement>) => Promise<void>;
  isEdit: boolean;
  setAddress: Dispatch<SetStateAction<string>>;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

// export interface IQuestionItemProps {
//   el: IFetchUseditemQuestions;
//   setAddress: Dispatch<SetStateAction<string>>;
//   setIsEdit: Dispatch<SetStateAction<boolean>>;
// }

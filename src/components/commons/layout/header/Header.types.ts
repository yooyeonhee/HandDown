import { Dispatch, SetStateAction } from "react";

export interface IFetchUserLoggedIn {
  name: string;
  email: string;
  userPoint: {
    amount: number;
  };
}
export interface IHeaderUIProps {
  isHiddenMenu: boolean;
  onClickToLogin: () => void;
  onClickToSignup: () => void;
  onClickToMarket: () => void;
  onClickToMypage: () => void;
  onClickToMain: () => void;
  onClickLogout: () => Promise<void>;
  loginData: {
    fetchUserLoggedIn: IFetchUserLoggedIn;
  };
  onClickMenu: () => void;
  isOpenMenu: boolean;
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
  onClickToNew: () => void;
  onClickToMyPoint: () => void;
  isModalVisible: boolean;
  showModal: () => void;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
}

import { Dispatch, SetStateAction } from "react";

export interface IFetchUserLoggedIn {
  name: string;
}
export interface IHeaderUIProps {
  isHiddenMenu: boolean;
  onClickToLogin: () => void;
  onClickToSignup: () => void;
  onClickToMarket: () => void;
  onClickToMypage: () => void;
  onClickToMain: () => void;
  onClickLogout: () => Promise<void>;
  data: {
    fetchUserLoggedIn: IFetchUserLoggedIn;
  };
  onClickMenu: () => void;
  isOpenMenu: boolean;
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
}

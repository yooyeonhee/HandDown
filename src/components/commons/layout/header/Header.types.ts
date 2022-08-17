export interface IFetchUserLoggedIn {
  name: string;
}
export interface IHeaderUIProps {
  isHiddenMenu: boolean;
  onClickToLogin: () => void;
  onClickToSignup: () => void;
  onClickToMarket: () => void;
  onClickToMypage: () => void;
  onClickLogout: () => Promise<void>;
  data: {
    fetchUserLoggedIn: IFetchUserLoggedIn;
  };
}

import { Dispatch, SetStateAction } from "react";

export interface IFetchUserLoggedIn {
  name: string;
  email: string;
  userPoint: {
    amount: number;
  };
}
export interface IProfileUIProps {
  loginData: {
    fetchUserLoggedIn: IFetchUserLoggedIn;
  };
  productCount: {
    fetchUseditemsCountISold: number;
  };
  pickCount: {
    fetchUseditemsCountIPicked: number;
  };
}

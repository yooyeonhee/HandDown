import { ChangeEvent, MouseEvent } from "react";

export interface ISeller {
  name: string;
}
export interface IFiles {
  url: string;
}
export interface IFetchUseditems {
  _id: string;
  name: string;
  remarks: string;
  contents: string;
  price: number;
  createdAt: Date;
  pickedCount: number;
  seller: ISeller;
  images: Array<IFiles>;
}

export interface IListUIProps {
  data: {
    fetchUseditems: Array<IFetchUseditems>;
  };
  loadFunc: () => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickToDetail: (event: MouseEvent<HTMLDivElement>) => void;
}

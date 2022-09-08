import { Dispatch, SetStateAction } from "react";

export interface IMypagePaginationProps {
  count?: number;
  refetch: any;
  setPageNum: Dispatch<SetStateAction<number>>;
}

export interface IMypagePaginationUIProps {
  nowPage: number;
  onClickGetPage: any;
  onClickToPrev: () => void;
  onClickToNext: () => void;
  startPage: number;
  lastPage: number;
}
export interface IPageProps {
  isActive?: boolean;
}

export interface IMypagePaginationProps {
  count?: number;
  refetch: any;
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

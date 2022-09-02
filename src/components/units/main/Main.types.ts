export interface IFiles {
  url: string;
}
export interface IFetchUseditemsOfTheBest {
  _id: string;
  name: string;
  remarks: string;
  contents: string;
  price: number;
  createdAt: Date;
  pickedCount: number;
  images: Array<IFiles>;
}
export interface IMainUIProps {
  bestItem: {
    fetchUseditemsOfTheBest: Array<IFetchUseditemsOfTheBest>;
  };
  onClickToShop: () => void;
}

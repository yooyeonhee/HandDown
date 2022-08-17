import styled from "@emotion/styled";
import { MouseEvent } from "react";
import { getDate } from "../../../../commons/libraries/utils";
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
export interface IListItemProps {
  el: IFetchUseditems;
  onClickToDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
export const Body = styled.div`
  width: 100%;
  height: 250px;
  /* padding: 50px 50px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid #bdbdbd; */
  margin-bottom: 50px;
`;
export const ItemImg = styled.div`
  width: 200px;
  height: 200px;
  background-color: aliceblue;
  border-radius: 20px;
`;
export const ItemInfoWrapper = styled.div`
  width: 60%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const ItemTitle = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #444444;
`;
export const ItemRemark = styled.div`
  font-size: 18px;
  color: #444444;
  margin-bottom: 10px;
`;
export const ItemUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
export const ItemUserIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
export const ItemUserInfo = styled.div`
  font-size: 18px;
  margin-right: 15px;
  color: #444444;
`;
export const ItemCreatedAt = styled.div`
  font-size: 15px;
  color: #b0abab;
`;

export const ItemPrice = styled.div`
  width: 15%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 22px;
  color: #444444;
  font-weight: 600;
`;
export default function ListItem(props: IListItemProps) {
  return (
    <Body id={props.el._id} onClick={props.onClickToDetail}>
      <ItemImg />
      <ItemInfoWrapper>
        <ItemTitle>{props.el.name}</ItemTitle>
        <ItemRemark>{props.el?.remarks}</ItemRemark>
        <ItemUserInfoWrapper>
          <ItemUserIcon src="/list/icons/user.png" />
          <ItemUserInfo>{props.el.seller.name}</ItemUserInfo>
          <ItemUserIcon src="/list/icons/pick.png" />
          <ItemUserInfo>{props.el.pickedCount}</ItemUserInfo>
        </ItemUserInfoWrapper>
        <ItemCreatedAt>{getDate(props.el.createdAt)}</ItemCreatedAt>
      </ItemInfoWrapper>
      <ItemPrice>{props.el.price.toLocaleString()}원</ItemPrice>
    </Body>
  );
}

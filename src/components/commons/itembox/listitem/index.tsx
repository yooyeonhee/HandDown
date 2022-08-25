import styled from "@emotion/styled";
import { MouseEvent } from "react";
import { getDate } from "../../../../commons/libraries/utils";
export interface ISeller {
  name: string;
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
  images: Array<string>;
}
export interface IListItemProps {
  el: IFetchUseditems;
  onClickToDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
export const Body = styled.div`
  width: 100%;
  height: 25%;
  min-height: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    position: relative;
  }
`;
export const ItemImg = styled.img`
  width: 16vw;
  min-width: 150px;
  height: 16vw;
  min-height: 150px;
  background-color: aliceblue;
  border-radius: 20px;
  margin-right: 20px;
  @media (max-width: 576px) {
    width: 200px;
    height: 200px;
  }
`;
export const ItemInfoWrapper = styled.div`
  width: 45%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 576px) {
    width: 100%;
    height: 150px;
    margin: 0px;
    padding: 20px;
  }
`;
export const ItemTitle = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #444444;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
export const ItemRemark = styled.div`
  font-size: 18px;
  color: #444444;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ItemUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
export const ItemUserIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
`;
export const ItemUserInfo = styled.div`
  font-size: 18px;
  margin-right: 15px;
  color: #444444;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
export const ItemCreatedAt = styled.div`
  font-size: 15px;
  color: #b0abab;
`;

export const ItemPrice = styled.div`
  width: 25%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 22px;
  color: #444444;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 576px) {
    height: auto;
    min-width: 200px;
    position: absolute;
    bottom: 25px;
    right: 10px;
    font-size: 16px;
  }
`;
export default function ListItem(props: IListItemProps) {
  return (
    <Body id={props.el._id} onClick={props.onClickToDetail}>
      {props.el.images.length === 0 || props.el.images[0] === "" ? (
        <ItemImg src={"/list/noimg.png"} />
      ) : (
        <ItemImg src={`https://storage.googleapis.com/${props.el.images[0]}`} />
      )}
      {/* <ItemImg src={`https://storage.googleapis.com/${props.el.images[0]}`} /> */}
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

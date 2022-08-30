/* 그리드 박스형 리스트 컴포넌트 */
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

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
interface IBestItemProps {
  el: IFetchUseditemsOfTheBest;
}
const Box = styled.div`
  /* width: 100%; */
  width: 22%;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-right: 20px;
  &:hover {
    transform: scale(1.05);
    transition: all 0.5s;
  }
  &:last-child {
    margin-right: 0px;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
const BoxImg = styled.img`
  width: 100%;
  height: 15vw;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 30vw;
  }
`;
const ItemInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  position: relative;
`;
const ItemName = styled.div`
  width: 100%;
  min-width: 50px;
  font-size: 18px;
  color: #444444;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 5px;
  @media (max-width: 900px) {
    font-size: 15px;
  }
`;
const ItemRemarks = styled.div`
  font-size: 12px;
  color: #4f4f4f;
  font-weight: 400;
  margin-bottom: 5px;
  @media (max-width: 900px) {
    font-size: 10px;
  }
`;
const ItemPrice = styled.div`
  font-size: 18px;
  color: #444444;
  font-weight: 700;
  @media (max-width: 900px) {
    font-size: 15px;
  }
`;
const PickCountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 20px;
  bottom: 5px;
`;
const PickCountImg = styled.img`
  width: 20px;
  height: 20px;
  @media (max-width: 900px) {
    width: 15px;
    height: 15px;
  }
`;
const PickCount = styled.div`
  font-size: 18px;
  color: #444444;
  font-weight: 400;
  @media (max-width: 900px) {
    font-size: 15px;
  }
`;
export default function BestItem(props: IBestItemProps) {
  const router = useRouter();
  const onClickToDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/market/${event.currentTarget.id}`);
  };
  return (
    <Box onClick={onClickToDetail} id={props.el._id}>
      <BoxImg src={`https://storage.googleapis.com/${props.el.images[0]}`} />
      <ItemInfo>
        <ItemName>{props.el.name}</ItemName>
        <ItemRemarks>{props.el.remarks}</ItemRemarks>
        <ItemPrice>{props.el.price.toLocaleString()}원</ItemPrice>
        <PickCountWrapper>
          <PickCountImg src="/main/item/pick.png" />
          <PickCount>{props.el.pickedCount}</PickCount>
        </PickCountWrapper>
      </ItemInfo>
    </Box>
  );
}

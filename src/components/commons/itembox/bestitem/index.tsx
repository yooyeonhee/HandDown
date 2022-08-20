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
  width: 280px;
  height: 320px;
  display: flex;
  flex-direction: column;
  background-color: white;
  &:hover {
    transform: scale(1.05);
    transition: all 0.5s;
  }
`;
const BoxImg = styled.div`
  width: 280px;
  height: 210px;
  background-color: aliceblue;
`;
const ItemInfo = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  position: relative;
`;
const ItemName = styled.div`
  width: 280px;
  font-size: 18px;
  color: #444444;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 5px;
`;
const ItemRemarks = styled.div`
  font-size: 12px;
  color: #4f4f4f;
  font-weight: 400;
  margin-bottom: 5px;
`;
const ItemPrice = styled.div`
  font-size: 18px;
  color: #444444;
  font-weight: 700;
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
`;
const PickCount = styled.div`
  font-size: 18px;
  color: #444444;
  font-weight: 400;
`;
export default function BestItem(props: IBestItemProps) {
  const router = useRouter();
  const onClickToDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/market/${event.currentTarget.id}`);
  };
  return (
    <Box onClick={onClickToDetail} id={props.el._id}>
      <BoxImg />
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

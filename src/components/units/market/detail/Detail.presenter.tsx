import RowLine from "../../../commons/lines/rowline";
import OutputKakaoMap from "../../../commons/maps/outputmaps";
import QuestionWrite from "../question/questionwrite/QuestionWrite.container";
import * as S from "./Detail.styles";
import Dompurify from "dompurify";
import { v4 as uuidv4 } from "uuid";
import { IDetailUIProps } from "./Detail.types";
import QuestionList from "../question/questionlist/QuestionList.container";
export default function DetailUI(props: IDetailUIProps) {
  console.log(props.mainImg);
  return (
    <S.Body>
      <RowLine />
      <S.Title>상품상세</S.Title>
      <S.ItemInfoWrapper>
        <S.ItemImgWrapper>
          <S.SubImgWrapper>
            {props.itemData?.fetchUseditem?.images.map(
              (el) =>
                el !== "" && (
                  <S.SubImg
                    key={uuidv4()}
                    id={el}
                    src={`https://storage.googleapis.com/${el}`}
                    onClick={props.onClickSubImage}
                  />
                )
            )}
          </S.SubImgWrapper>
          {props.itemData?.fetchUseditem.images[0] === "" ||
          props.itemData?.fetchUseditem.images.length === 0 ? (
            <S.Img src={"/list/noimg.png"} />
          ) : (
            <S.Img src={`https://storage.googleapis.com/${props.mainImg}`} />
          )}
        </S.ItemImgWrapper>
        <S.InfoWrapper>
          <S.TitleWrapper>
            <S.ItemTitle>{props.itemData?.fetchUseditem.name}</S.ItemTitle>
            {/* <S.ItemIsSold>판매중</S.ItemIsSold> */}
          </S.TitleWrapper>

          <S.ItemRemark>{props.itemData?.fetchUseditem.remarks}</S.ItemRemark>
          <S.ItemArea>
            {props.itemData?.fetchUseditem.useditemAddress.address
              ? `거래지역 : ${props.itemData.fetchUseditem.useditemAddress.address}`
              : "택배거래"}
          </S.ItemArea>
          <S.ItemPrice>
            {props.itemData?.fetchUseditem.price.toLocaleString()}원
          </S.ItemPrice>
          <S.ButtonWrapper>
            <S.PickBtn onClick={props.onClickPick}>
              찜하기
              {props.itemData && props.itemData?.fetchUseditem.pickedCount}
              <S.PickIcon src="/detail/icons/pick.png" />
            </S.PickBtn>
            <S.BuyBtn type="button" onClick={props.showBuyConfirm}>
              구매하기
            </S.BuyBtn>
          </S.ButtonWrapper>
        </S.InfoWrapper>
      </S.ItemInfoWrapper>
      <RowLine />
      <S.SubTitle>
        <S.SubIcon src="/detail/icons/duck.png" />
        상세설명
      </S.SubTitle>
      {typeof window !== "undefined" ? (
        <S.ItemContent
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(props.itemData?.fetchUseditem.contents),
          }}
        ></S.ItemContent>
      ) : (
        <S.ItemContent />
      )}

      {props.itemData?.fetchUseditem.useditemAddress.address && (
        <S.Map>
          <OutputKakaoMap
            address={props.itemData?.fetchUseditem.useditemAddress?.address}
          />
        </S.Map>
      )}
      <RowLine />
      <S.Title>Q & A</S.Title>
      <QuestionWrite />
      <QuestionList />
    </S.Body>
  );
}

import RowLine from "../../../commons/lines/rowline";
import OutputKakaoMap from "../../../commons/maps/outputmaps";
import QuestionWrite from "../question/questionwrite/QuestionWrite.container";
import * as S from "./Detail.styles";
import Dompurify from "dompurify";
import { IDetailUIProps } from "./Detail.types";
export default function DetailUI(props: IDetailUIProps) {
  return (
    <S.Body>
      <RowLine />
      <S.Title>상품상세</S.Title>
      <S.ItemInfoWrapper>
        <S.ItemImgWrapper>
          <S.SubImgWrapper>
            <S.SubImg />
            <S.SubImg />
            <S.SubImg />
            <S.SubImg />
          </S.SubImgWrapper>
          <S.Img />
        </S.ItemImgWrapper>
        <S.InfoWrapper>
          <S.TitleWrapper>
            <S.ItemTitle>{props.itemData?.fetchUseditem.name}</S.ItemTitle>
            <S.ItemIsSold>판매중</S.ItemIsSold>
          </S.TitleWrapper>

          <S.ItemRemark>{props.itemData?.fetchUseditem.remarks}</S.ItemRemark>
          <S.ItemArea>
            거래지역 : {props.itemData?.fetchUseditem.useditemAddress?.address}
          </S.ItemArea>
          <S.ItemPrice>{props.itemData?.fetchUseditem.price}원</S.ItemPrice>
          <S.ButtonWrapper>
            <S.PickBtn>
              찜하기
              <S.PickIcon src="/detail/icons/pick.png" />
            </S.PickBtn>
            <S.BuyBtn>구매하기</S.BuyBtn>
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

      <S.Map>
        <OutputKakaoMap
          address={props.itemData?.fetchUseditem.useditemAddress?.address}
        />
      </S.Map>
      <RowLine />
      <S.Title>상품문의</S.Title>
      <QuestionWrite />
    </S.Body>
  );
}

import RowLine from "../../../commons/lines/rowline";
import OutputKakaoMap from "../../../commons/maps/outputmaps";
import QuestionWrite from "../question/questionwrite/QuestionWrite.container";
import * as S from "./Detail.styles";
export default function DetailUI() {
  return (
    <S.Body>
      <RowLine />
      <S.Title>상품상세</S.Title>
      <S.ItemInfoWrapper>
        <S.SubImgWrapper>
          <S.SubImg />
          <S.SubImg />
          <S.SubImg />
        </S.SubImgWrapper>
        <S.Img />
        <S.InfoWrapper>
          <S.TitleWrapper>
            <S.ItemTitle>아기 옷 팔아요</S.ItemTitle>
            <S.ItemIsSold>판매중</S.ItemIsSold>
          </S.TitleWrapper>

          <S.ItemRemark>포장도 뜯지않았습니다.</S.ItemRemark>
          <S.ItemArea>거래지역 : 경기도 일산동구 식사동</S.ItemArea>
          <S.ItemPrice>3,000원</S.ItemPrice>
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
      <S.ItemContent>
        실밥이 조금 튀어나왔지만 예민하신분아니면 전혀 신경쓰이지않을정도입니다
        . 비닐 포장되어있는 상태입니다. <br></br>아이가 너무 많이 커서 입을 수
        가 없네요ㅜㅜ 택배거래는 안합니다. <br></br>직거래 가능하신 분만
        구매해주세요.
      </S.ItemContent>
      <S.Map>
        <OutputKakaoMap />
      </S.Map>
      <RowLine />
      <S.Title>상품문의</S.Title>
      <QuestionWrite />
    </S.Body>
  );
}

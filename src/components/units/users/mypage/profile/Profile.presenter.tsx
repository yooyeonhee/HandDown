import * as S from "./Profile.styles";
export default function ProfileUI() {
  return (
    <S.Body>
      <S.Title>마이페이지</S.Title>
      <S.ProfileWrapper>
        <S.ProfileLeftInfo>
          <S.ProfileImg src="/mypage/profile.png" />
          <S.ProfileEmail>ryh0629@naver.com</S.ProfileEmail>
        </S.ProfileLeftInfo>
        <S.ProfileRightInfo>
          <S.CircleInfo>
            <S.InfoIcon src="/mypage/point.png" />
            <S.InfoTitle>보유 포인트</S.InfoTitle>
            <S.InfoCount>
              3,400<S.CountUnit>P</S.CountUnit>
            </S.InfoCount>
          </S.CircleInfo>
          <S.CircleInfo>
            <S.InfoIcon src="/mypage/list.png" />
            <S.InfoTitle>판매 상품</S.InfoTitle>
            <S.InfoCount>34</S.InfoCount>
          </S.CircleInfo>
          <S.CircleInfo>
            <S.InfoIcon src="/mypage/heart.png" />
            <S.InfoTitle>찜 상품</S.InfoTitle>
            <S.InfoCount>12</S.InfoCount>
          </S.CircleInfo>
        </S.ProfileRightInfo>
      </S.ProfileWrapper>
    </S.Body>
  );
}

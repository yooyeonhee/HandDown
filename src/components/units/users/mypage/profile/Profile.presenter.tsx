import ChargeModal from "../chargemodal";
import * as S from "./Profile.styles";
import { IProfileUIProps } from "./Profile.types";
export default function ProfileUI(props: IProfileUIProps) {
  return (
    <>
      <S.Body>
        <S.Title>마이페이지</S.Title>
        <S.ProfileWrapper>
          <S.ProfileLeftInfo>
            <S.ProfileImg src="/mypage/profile.png" />
            <S.ProfileName>
              {props.loginData?.fetchUserLoggedIn.name}
            </S.ProfileName>
            <S.FunctionBtn onClick={props.showModal}>
              {"> 포인트 충전"}
            </S.FunctionBtn>
          </S.ProfileLeftInfo>
          <S.ProfileRightInfo>
            <S.CircleInfo>
              <S.InfoIcon src="/mypage/point.png" />
              <S.InfoTitle>보유 포인트</S.InfoTitle>
              <S.InfoCount>
                {props.loginData?.fetchUserLoggedIn.userPoint.amount.toLocaleString()}
                <S.CountUnit>P</S.CountUnit>
              </S.InfoCount>
            </S.CircleInfo>
            <S.CircleInfo>
              <S.InfoIcon src="/mypage/list.png" />
              <S.InfoTitle>판매 상품</S.InfoTitle>
              <S.InfoCount>
                {props.productCount?.fetchUseditemsCountISold}
              </S.InfoCount>
            </S.CircleInfo>
            <S.CircleInfo>
              <S.InfoIcon src="/mypage/heart.png" />
              <S.InfoTitle>찜 상품</S.InfoTitle>
              <S.InfoCount>
                {props.pickCount?.fetchUseditemsCountIPicked}
              </S.InfoCount>
            </S.CircleInfo>
          </S.ProfileRightInfo>
        </S.ProfileWrapper>
      </S.Body>
      {props.isModalVisible && (
        <ChargeModal
          setIsModalVisible={props.setIsModalVisible}
          loginData={props.loginData}
        />
      )}
    </>
  );
}

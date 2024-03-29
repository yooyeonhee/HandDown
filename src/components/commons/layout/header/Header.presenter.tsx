import ChargeModal from "../../../units/users/mypage/chargemodal";
import ToggleMenu from "../../menu/togglemenu";
import * as S from "./Header.styles";
import { IHeaderUIProps } from "./Header.types";
export default function HeaderUI(props: IHeaderUIProps) {
  return (
    <>
      {props.isOpenMenu && (
        <ToggleMenu
          setIsOpenMenu={props.setIsOpenMenu}
          loginData={props.loginData}
          onClickToLogin={props.onClickToLogin}
          onClickToSignup={props.onClickToSignup}
          onClickToMarket={props.onClickToMarket}
          onClickToMypage={props.onClickToMypage}
          onClickLogout={props.onClickLogout}
          onClickToNew={props.onClickToNew}
          onClickToMyPoint={props.onClickToMyPoint}
          showModal={props.showModal}
        />
      )}
      <S.Body>
        <S.HeaderWrapper>
          <S.Logo src="/logo/logo.png" onClick={props.onClickToMain} />
          <S.BurgerMenu
            src="/header/burger-bar.png"
            onClick={props.onClickMenu}
          />
          {props.accessToken ? (
            <S.Navbar>
              <S.NavItem onClick={props.onClickToMypage}>
                {props.loginData?.fetchUserLoggedIn.name}님
              </S.NavItem>
              <S.NavItem onClick={props.onClickLogout}>로그아웃</S.NavItem>
              <S.NavShop onClick={props.onClickToMarket}>shop</S.NavShop>
            </S.Navbar>
          ) : (
            <S.Navbar>
              <S.NavItem onClick={props.onClickToLogin}>로그인</S.NavItem>
              <S.NavItem onClick={props.onClickToSignup}>회원가입</S.NavItem>
              <S.NavShop onClick={props.onClickToMarket}>shop</S.NavShop>
            </S.Navbar>
          )}
        </S.HeaderWrapper>
        {!props.isHiddenMenu && (
          <S.MenuWrapper>
            <S.Menu
              onClick={props.onClickToMypage}
              isSelect={props.menuSelect[0]}
            >
              <S.MenuIcon src="/header/menu/market.png"></S.MenuIcon>
              <S.MenuTitle>내 장터</S.MenuTitle>
            </S.Menu>
            <S.Menu
              onClick={props.onClickToMyPoint}
              isSelect={props.menuSelect[1]}
            >
              <S.MenuIcon src="/header/menu/point.png"></S.MenuIcon>
              <S.MenuTitle>내 포인트</S.MenuTitle>
            </S.Menu>
            <S.Menu onClick={props.onClickToNew} isSelect={props.menuSelect[2]}>
              <S.MenuIcon src="/header/menu/write.png"></S.MenuIcon>
              <S.MenuTitle>상품 등록</S.MenuTitle>
            </S.Menu>
            <S.Menu onClick={props.showModal} isSelect={props.isModalVisible}>
              <S.MenuChargeIcon src="/header/menu/charge.png"></S.MenuChargeIcon>
              <S.MenuTitle>포인트 충전</S.MenuTitle>
            </S.Menu>
          </S.MenuWrapper>
        )}
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

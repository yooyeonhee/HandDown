import ToggleMenu from "../../menu/togglemenu";
import * as S from "./Header.styles";
import { IHeaderUIProps } from "./Header.types";
export default function HeaderUI(props: IHeaderUIProps) {
  return (
    <>
      {props.isOpenMenu && <ToggleMenu setIsOpenMenu={props.setIsOpenMenu} />}
      <S.Body>
        <S.HeaderWrapper>
          <S.Logo src="/logo/logo.png" onClick={props.onClickToMain} />
          <S.BurgerMenu
            src="/header/burger-bar.png"
            onClick={props.onClickMenu}
          />
          {props.data ? (
            <S.Navbar>
              <S.NavItem onClick={props.onClickToMypage}>
                {props.data?.fetchUserLoggedIn.name}님
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
          <S.MenuWrapper onClick={props.onClickToMypage}>
            <S.Menu>
              <S.MenuIcon src="/header/menu/market.png"></S.MenuIcon>
              <S.MenuTitle>내 장터</S.MenuTitle>
            </S.Menu>
            <S.Menu onClick={props.onClickToMyPoint}>
              <S.MenuIcon src="/header/menu/point.png"></S.MenuIcon>
              <S.MenuTitle>내 포인트</S.MenuTitle>
            </S.Menu>

            <S.Menu onClick={props.onClickToNew}>
              <S.MenuIcon src="/header/menu/write.png"></S.MenuIcon>
              <S.MenuTitle>상품 등록</S.MenuTitle>
            </S.Menu>
          </S.MenuWrapper>
        )}
      </S.Body>
    </>
  );
}

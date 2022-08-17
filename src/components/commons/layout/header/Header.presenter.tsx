import * as S from "./Header.styles";
import { IHeaderUIProps } from "./Header.types";
export default function HeaderUI(props: IHeaderUIProps) {
  return (
    <S.Body>
      <S.HeaderWrapper>
        <S.Logo>HandDown</S.Logo>
        {props.data ? (
          <S.Navbar>
            <S.NavItem onClick={props.onClickToMypage}>
              {props.data?.fetchUserLoggedIn.name}님 마이페이지
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
      {!props.isHiddenMenu && <S.MenuWrapper></S.MenuWrapper>}
    </S.Body>
  );
}

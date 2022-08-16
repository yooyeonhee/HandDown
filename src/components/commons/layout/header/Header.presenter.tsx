import * as S from "./Header.styles";
import { IHeaderUIProps } from "./Header.types";
export default function HeaderUI(props: IHeaderUIProps) {
  return (
    <S.Body>
      <S.HeaderWrapper>
        <S.Logo>HandDown</S.Logo>
        <S.Navbar>
          <S.NavItem onClick={props.onClickToLogin}>로그인</S.NavItem>
          <S.NavItem onClick={props.onClickToSignup}>회원가입</S.NavItem>
          <S.NavShop onClick={props.onClickToMarket}>shop</S.NavShop>
        </S.Navbar>
      </S.HeaderWrapper>
      {!props.isHiddenMenu && <S.MenuWrapper></S.MenuWrapper>}
    </S.Body>
  );
}

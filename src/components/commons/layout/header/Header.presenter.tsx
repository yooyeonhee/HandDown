import * as S from "./Header.styles";
import { IHeaderUIProps } from "./Header.types";
export default function HeaderUI(props: IHeaderUIProps) {
  return (
    <S.Body>
      <S.HeaderWrapper>
        <S.Logo>HandDown</S.Logo>
      </S.HeaderWrapper>
      {!props.isHiddenMenu && <S.MenuWrapper></S.MenuWrapper>}
    </S.Body>
  );
}

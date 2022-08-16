import DecoBox from "../../../commons/decoration/decobox";
import ListItem from "../../../commons/itembox/listitem";
import Banner from "../../../commons/layout/banner/Banner.container";
import * as S from "./List.styles";
export default function ListUI() {
  return (
    <S.Body>
      <Banner />
      <S.SearchBarWrapper>
        <S.LabelWrapper>
          <S.Label>
            오늘의 상품 <S.MoreIcon src="/list/icons/more.png" />
          </S.Label>
          <DecoBox />
        </S.LabelWrapper>
        <S.SearchBar>
          <S.SearchIcon src="/list/icons/search.png" />
          <S.SearchInput type="text" placeholder="검색어를 입력해주세요.." />
        </S.SearchBar>
      </S.SearchBarWrapper>
      <S.ListWrapper>
        <ListItem />
      </S.ListWrapper>
    </S.Body>
  );
}

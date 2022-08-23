import DecoBox from "../../../commons/decoration/decobox";
import ListItem from "../../../commons/itembox/listitem";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import Banner from "../../../commons/layout/banner/Banner.container";
import * as S from "./List.styles";
import { IFetchUseditems, IListUIProps } from "./List.types";
export default function ListUI(props: IListUIProps) {
  return (
    <S.Body>
      <Banner />
      <S.SearchBarWrapper>
        <S.LabelWrapper>
          <S.Label>오늘의 상품</S.Label>
          <DecoBox />
        </S.LabelWrapper>
        <S.SearchBar>
          <S.SearchIcon src="/list/icons/search.png" />
          <S.SearchInput
            type="text"
            placeholder="검색어를 입력해주세요."
            onChange={props.onChangeSearch}
          />
        </S.SearchBar>
      </S.SearchBarWrapper>
      <S.ListWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.loadFunc}
          hasMore={true}
          useWindow={false}
        >
          {props.data ? (
            props.data?.fetchUseditems.map((el: IFetchUseditems) => (
              <ListItem
                key={uuidv4()}
                el={el}
                onClickToDetail={props.onClickToDetail}
              />
            ))
          ) : (
            <></>
          )}
        </InfiniteScroll>
      </S.ListWrapper>
    </S.Body>
  );
}

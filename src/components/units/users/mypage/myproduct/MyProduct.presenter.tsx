import { getDate } from "../../../../../commons/libraries/utils";
import ColumnLine from "../../../../commons/lines/columnline";
import RowLine from "../../../../commons/lines/rowline";
import MypagePagination from "../../../../commons/pagination/mypage/MypagePagination.container";
import * as S from "./MyProduct.styles";
import {
  IFetchUseditemsIPicked,
  IFetchUseditemsISold,
  IMyProductUIProps,
} from "./MyProduct.types";
export default function MyProductUI(props: IMyProductUIProps) {
  console.log(props.pageNum);
  return (
    <S.Body>
      <S.TableOptionWrapper>
        <S.TableOption
          id="sold"
          onClick={props.onClickOption}
          isSelect={props.optionSelect[0]}
        >
          등록한 상품
        </S.TableOption>
        <ColumnLine />
        <S.TableOption
          id="pick"
          onClick={props.onClickOption}
          isSelect={props.optionSelect[1]}
        >
          찜한 상품
        </S.TableOption>
      </S.TableOptionWrapper>
      {props.option === "sold" && (
        <>
          <S.TableTop />
          <S.Row>
            <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
            <S.ColumnHeaderTitle>상품명</S.ColumnHeaderTitle>
            <S.ColumnHeaderBasic>가격</S.ColumnHeaderBasic>
            <S.ColumnHeaderBasic>판매여부</S.ColumnHeaderBasic>
          </S.Row>

          {props.ProductData?.fetchUseditemsISold.map(
            (el: IFetchUseditemsISold, index: number) => (
              <S.Row
                key={el._id}
                id={el._id}
                onClick={props.onClickTitleToDetail}
              >
                <S.ColumnBasic>
                  {index + 10 * (props.pageNum - 1) + 1}
                </S.ColumnBasic>
                <S.ColumnTitle id={el._id}>{el.name}</S.ColumnTitle>
                <S.ColumnBasic>{el.price.toLocaleString()}원</S.ColumnBasic>
                {el.soldAt === null ? (
                  <S.ColumnBasic>판매중</S.ColumnBasic>
                ) : (
                  <S.ColumnBasic>판매완료</S.ColumnBasic>
                )}
              </S.Row>
            )
          )}
          <S.TableBottom />
          <S.Footer>
            <MypagePagination
              refetch={props.refetchProductData}
              count={props.ProductDataCount?.fetchUseditemsCountISold}
              setPageNum={props.setPageNum}
            />
          </S.Footer>
        </>
      )}
      {props.option === "pick" && (
        <>
          <S.TableTop />
          <S.Row>
            <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
            <S.ColumnHeaderTitle>상품명</S.ColumnHeaderTitle>
            <S.ColumnHeaderBasic>가격</S.ColumnHeaderBasic>
            <S.ColumnHeaderBasic>판매여부</S.ColumnHeaderBasic>
          </S.Row>

          {props.PickedData?.fetchUseditemsIPicked.map(
            (el: IFetchUseditemsIPicked, index: number) => (
              <S.Row
                key={el._id}
                id={el._id}
                onClick={props.onClickTitleToDetail}
              >
                <S.ColumnBasic>
                  {index + 10 * (props.pageNum - 1) + 1}
                </S.ColumnBasic>
                <S.ColumnTitle id={el._id}>{el.name}</S.ColumnTitle>
                <S.ColumnBasic>{el.price.toLocaleString()}원</S.ColumnBasic>
                {el.soldAt === null ? (
                  <S.ColumnBasic>판매중</S.ColumnBasic>
                ) : (
                  <S.ColumnBasic>판매완료</S.ColumnBasic>
                )}
              </S.Row>
            )
          )}
          <S.TableBottom />
          <S.Footer>
            <MypagePagination
              refetch={props.refetchPickedData}
              count={props.PickedDataCount?.fetchUseditemsCountIPicked}
              setPageNum={props.setPageNum}
            />
          </S.Footer>
        </>
      )}
    </S.Body>
  );
}

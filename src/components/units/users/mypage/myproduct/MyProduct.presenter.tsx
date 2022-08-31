import { getDate } from "../../../../../commons/libraries/utils";
import ColumnLine from "../../../../commons/lines/columnline";
import RowLine from "../../../../commons/lines/rowline";
import MypagePagination from "../../../../commons/pagination/mypage/MypagePagination.container";
import * as S from "./MyProduct.styles";
import { IMyProductUIProps } from "./MyProduct.types";
export default function MyProductUI(props: IMyProductUIProps) {
  return (
    <S.Body>
      <S.TableOptionWrapper>
        <S.TableOption id="sold" onClick={props.onClickOption}>
          등록한 상품
        </S.TableOption>
        <ColumnLine />
        <S.TableOption id="pick" onClick={props.onClickOption}>
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
            (el: any, index: number) => (
              <S.Row key={el._id}>
                <S.ColumnBasic>{index + 1}</S.ColumnBasic>
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
            (el: any, index: number) => (
              <S.Row key={el._id}>
                <S.ColumnBasic>{index + 1}</S.ColumnBasic>
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
            />
          </S.Footer>
        </>
      )}
    </S.Body>
  );
}

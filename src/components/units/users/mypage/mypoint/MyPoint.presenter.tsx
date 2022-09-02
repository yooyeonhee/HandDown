import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../../commons/libraries/utils";
import ColumnLine from "../../../../commons/lines/columnline";
import RowLine from "../../../../commons/lines/rowline";
import MypagePagination from "../../../../commons/pagination/mypage/MypagePagination.container";

import * as S from "./MyPoint.styles";
import { IFetchPointTransactions, IMyPointUIProps } from "./MyPoint.types";
export default function MyPointUI(props: IMyPointUIProps) {
  return (
    <S.Body>
      <S.TableOptionWrapper>
        <S.TableOption
          onClick={props.onClickOption}
          id="all"
          isSelect={props.optionSelect[0]}
        >
          전체 내역
        </S.TableOption>
        <ColumnLine />
        <S.TableOption
          onClick={props.onClickOption}
          id="buy"
          isSelect={props.optionSelect[1]}
        >
          구매 내역
        </S.TableOption>
        <ColumnLine />
        <S.TableOption
          onClick={props.onClickOption}
          id="sell"
          isSelect={props.optionSelect[2]}
        >
          판매 내역
        </S.TableOption>
        <ColumnLine />
        <S.TableOption
          onClick={props.onClickOption}
          id="load"
          isSelect={props.optionSelect[3]}
        >
          충전 내역
        </S.TableOption>
      </S.TableOptionWrapper>
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>내용</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>금액</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>잔액</S.ColumnHeaderBasic>
      </S.Row>
      {props.option === "all" && (
        <>
          {props.pointData?.fetchPointTransactions.map(
            (el: IFetchPointTransactions) => (
              <S.Row key={el._id}>
                <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
                <S.ColumnTitle id={el._id}>{el.status}</S.ColumnTitle>
                <S.ColumnBasic>{el.amount.toLocaleString()}원</S.ColumnBasic>
                <S.ColumnBasic>{el.balance.toLocaleString()}원</S.ColumnBasic>
              </S.Row>
            )
          )}
        </>
      )}
      {props.option === "buy" && (
        <>
          {props.buyingData?.fetchPointTransactionsOfBuying.map(
            (el: IFetchPointTransactions) => (
              <S.Row key={el._id}>
                <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
                <S.ColumnTitle id={el._id}>{el.status}</S.ColumnTitle>
                <S.ColumnBasic>{el.amount.toLocaleString()}원</S.ColumnBasic>
                <S.ColumnBasic>{el.balance.toLocaleString()}원</S.ColumnBasic>
              </S.Row>
            )
          )}
        </>
      )}
      {props.option === "sell" && (
        <>
          {props.sellingData?.fetchPointTransactionsOfSelling.map(
            (el: IFetchPointTransactions) => (
              <S.Row key={el._id}>
                <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
                <S.ColumnTitle id={el._id}>{el.status}</S.ColumnTitle>
                <S.ColumnBasic>{el.amount.toLocaleString()}원</S.ColumnBasic>
                <S.ColumnBasic>{el.balance.toLocaleString()}원</S.ColumnBasic>
              </S.Row>
            )
          )}
        </>
      )}
      {props.option === "load" && (
        <>
          {props.loadingData?.fetchPointTransactionsOfLoading.map(
            (el: IFetchPointTransactions) => (
              <S.Row key={el._id}>
                <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
                <S.ColumnTitle id={el._id}>{el.status}</S.ColumnTitle>
                <S.ColumnBasic>{el.amount.toLocaleString()}원</S.ColumnBasic>
                <S.ColumnBasic>{el.balance.toLocaleString()}원</S.ColumnBasic>
              </S.Row>
            )
          )}
        </>
      )}
      <S.TableBottom />
    </S.Body>
  );
}

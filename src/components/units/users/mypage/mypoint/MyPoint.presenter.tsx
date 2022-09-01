import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../../../commons/libraries/utils";
import RowLine from "../../../../commons/lines/rowline";
import MypagePagination from "../../../../commons/pagination/mypage/MypagePagination.container";

import * as S from "./MyPoint.styles";
import { IFetchPointTransactions, IMyPointUIProps } from "./MyPoint.types";
export default function MyPointUI(props: IMyPointUIProps) {
  return (
    <S.Body>
      <RowLine />
      <S.Row>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>내용</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>금액</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>잔액</S.ColumnHeaderBasic>
      </S.Row>
      {props.pointData?.fetchPointTransactions.map(
        (el: IFetchPointTransactions) => (
          <S.Row key={el._id}>
            <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
            <S.ColumnTitle id={el._id}>{el.status}</S.ColumnTitle>
            <S.ColumnBasic>{el.amount}</S.ColumnBasic>
            <S.ColumnBasic>{el.balance}</S.ColumnBasic>
          </S.Row>
        )
      )}
      <S.TableBottom />
      {/* <S.Footer>
        <MypagePagination refetch={props.refetch} count={props.count} />
      </S.Footer> */}
    </S.Body>
  );
}

import { IMypagePaginationUIProps } from "./MypagePagination.types";
import * as S from "./MypagePagination.styles";
export default function MypagePaginationUI(props: IMypagePaginationUIProps) {
  return (
    <S.Body>
      <S.Pages>
        <S.Button
          onClick={props.onClickToPrev}
          disabled={props.startPage === 1}
        >
          {"<"}
        </S.Button>

        {new Array(10).fill(1).map((_, index) => {
          return (
            index + props.startPage <= props.lastPage && (
              <S.Page
                key={index + props.startPage}
                id={String(index + props.startPage)}
                onClick={props.onClickGetPage}
                isActive={props.startPage + index === props.nowPage}
              >
                {" "}
                {index + props.startPage}{" "}
              </S.Page>
            )
          );
        })}

        <S.Button
          onClick={props.onClickToNext}
          disabled={props.startPage + 10 > props.lastPage}
        >
          {">"}
        </S.Button>
      </S.Pages>
    </S.Body>
  );
}

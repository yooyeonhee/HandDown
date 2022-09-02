import { Modal } from "antd";
import { getDate } from "../../../../../commons/libraries/utils";
import * as S from "./AnswerItem.styles";
import { IAnswerItemUIProps } from "./AnswerItem.types";
export default function AnswerItemUI(props: IAnswerItemUIProps) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.AnswerWrapper>
          <S.ProfileImg>
            <S.Img src="/list/icons/user.png" />
          </S.ProfileImg>
          <S.AnswerInfo>
            <S.AnswerNameFunc>
              <S.AnswerName>{props.el.user.name}</S.AnswerName>
              {props.el.user.email ===
              props.loginData?.fetchUserLoggedIn.email ? (
                <S.FuncOption>
                  <S.DeleteIcon
                    // id={index}
                    id={props.el._id}
                    src="/question/icons/delete.png"
                    onClick={props.onClickDelete}
                  ></S.DeleteIcon>
                </S.FuncOption>
              ) : (
                <></>
              )}
            </S.AnswerNameFunc>
            <S.AnswerContent>{props.el.contents}</S.AnswerContent>
            <S.AnswerDate>{getDate(props.el.createdAt)}</S.AnswerDate>
          </S.AnswerInfo>
        </S.AnswerWrapper>
      </S.Wrapper>
    </S.Body>
  );
}

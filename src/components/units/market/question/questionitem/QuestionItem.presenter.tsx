import { Modal } from "antd";
import { getDate } from "../../../../../commons/libraries/utils";
import QuestionWrite from "../questionwrite/QuestionWrite.container";
import * as S from "./QuestionItem.styles";
import { IQuestionItemUIProps } from "./QuestionItem.types";
export default function QuestionItemUI(props: IQuestionItemUIProps) {
  return (
    <S.Body>
      {props.address !== props.el._id && (
        <S.Wrapper>
          <S.QuestionWrapper>
            <S.ProfileImg>
              <S.Img src="/list/icons/user.png" />
            </S.ProfileImg>
            <S.QuestionInfo>
              <S.QuestionNameFunc>
                <S.QuestionName>{props.el.user.name}</S.QuestionName>
                {props.el.user.email ===
                props.loginData?.fetchUserLoggedIn.email ? (
                  <S.FuncOption>
                    <S.EditIcon
                      id={props.el._id}
                      src="/question/icons/edit.png"
                      onClick={props.onClickUpdate}
                    ></S.EditIcon>
                    <S.DeleteIcon
                      // id={index}
                      id={props.el._id}
                      src="/question/icons/delete.png"
                      onClick={props.showModal}
                    ></S.DeleteIcon>
                    <Modal
                      visible={props.isModalVisible}
                      onOk={props.handleOk}
                      onCancel={props.handleCancel}
                    >
                      <S.DeleteModalWrapper>
                        <S.DeleteModal>댓글을 삭제하시겠습니까?</S.DeleteModal>
                      </S.DeleteModalWrapper>
                    </Modal>
                  </S.FuncOption>
                ) : (
                  <S.FuncOption>
                    {props.itemData?.fetchUseditem.seller.email ===
                    props.loginData?.fetchUserLoggedIn.email ? (
                      <S.AnswerIcon
                        src="/question/icons/answer.png"
                        id={props.el._id}
                        onClick={props.onClickAnswer}
                      ></S.AnswerIcon>
                    ) : (
                      <></>
                    )}
                  </S.FuncOption>
                )}
              </S.QuestionNameFunc>
              <S.QuestionContent>{props.el.contents}</S.QuestionContent>
              <S.QuestionDate>{getDate(props.el.createdAt)}</S.QuestionDate>
            </S.QuestionInfo>
          </S.QuestionWrapper>
        </S.Wrapper>
      )}
      {props.address === props.el._id && (
        <QuestionWrite
          isEdit={props.isEdit}
          setIsEdit={props.setIsEdit}
          setAddress={props.setAddress}
          address={props.address}
          el={props.el}
        />
      )}
    </S.Body>
  );
}

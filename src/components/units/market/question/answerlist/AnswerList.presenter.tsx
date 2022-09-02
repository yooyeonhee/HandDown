import AnswerItem from "../answeritem/AnswerItem.container";
import AnswerWrite from "../answerwrite/AnswerWrite.container";
import * as S from "./AnswerList.styles";
import { IAnswerListUIProps } from "./AnswerList.types";

export default function AnswerListUI(props: IAnswerListUIProps) {
  return (
    <S.Body>
      {props.answerData ? (
        props.answerData?.fetchUseditemQuestionAnswers.map((el) => (
          <S.AnswerItems key={el._id}>
            <AnswerItem el={el} answerRefetch={props.answerRefetch} />
          </S.AnswerItems>
        ))
      ) : (
        <></>
      )}
    </S.Body>
  );
}

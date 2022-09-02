import * as S from "./QuestionList.styles";
import InfiniteScroll from "react-infinite-scroller";
import QuestionItem from "../questionitem/QuestionItem.container";
import {
  IFetchUseditemQuestions,
  IQuestionListUIProps,
} from "./QuestionList.types";
import QuestionWrite from "../questionwrite/QuestionWrite.container";
import AnswerWrite from "../answerwrite/AnswerWrite.container";
import AnswerList from "../answerlist/AnswerList.container";

export default function QuestionListUI(props: IQuestionListUIProps) {
  return (
    <S.Body>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadFunc}
        hasMore={true}
        useWindow={false}
      >
        {props.questionData ? (
          props.questionData?.fetchUseditemQuestions.map(
            (el: IFetchUseditemQuestions) => (
              <S.QuestionItems key={el._id}>
                <QuestionItem
                  el={el}
                  setIsAnswer={props.setIsAnswer}
                  setAnswerAddress={props.setAnswerAddress}
                  itemData={props.itemData}
                />
                {props.answerAddress === el._id && (
                  <AnswerWrite
                    answerAddress={props.answerAddress}
                    setAnswerAddress={props.setAnswerAddress}
                  />
                )}
                <AnswerList addressId={el._id} />
              </S.QuestionItems>
            )
          )
        ) : (
          <></>
        )}
      </InfiniteScroll>
    </S.Body>
  );
}

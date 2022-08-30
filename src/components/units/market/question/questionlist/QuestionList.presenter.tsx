import * as S from "./QuestionList.styles";
import InfiniteScroll from "react-infinite-scroller";
import QuestionItem from "../questionitem/QuestionItem.container";
import {
  IFetchUseditemQuestions,
  IQuestionListUIProps,
} from "./QuestionList.types";

export default function QuestionListUI(props: IQuestionListUIProps) {
  return (
    <S.Body>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadFunc}
        hasMore={true}
        useWindow={false}
      >
        {props.questionData?.fetchUseditemQuestions.map(
          (el: IFetchUseditemQuestions) => (
            <S.CommentItems key={el._id}>
              <QuestionItem
                el={el}
                setIsAnswer={props.setIsAnswer}
                setAnswerAddress={props.setAnswerAddress}
              />
              {/* <ProductQuestionAnswerListFunction /> */}
              {/* {console.log(props.answerAddress)}
            {console.log(el._id)} */}
              {/* {props.answerAddress === el._id && (
              <ProductQuestionAnswerWriteFunction
                answerAddress={props.answerAddress}
                setAnswerAddress={props.setAnswerAddress}
              />
            )} */}
              {/* <ProductQuestionAnswerListFunction addressId={el._id} /> */}
            </S.CommentItems>
          )
        )}
      </InfiniteScroll>
    </S.Body>
  );
}

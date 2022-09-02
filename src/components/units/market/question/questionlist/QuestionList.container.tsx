import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_USED_ITEM_QUESTIONS,
  FETCH_USER_LOGGED_IN,
} from "./QuestionList.queries";
import { useState } from "react";
import ProductQuestionListUI from "./QuestionList.presenter";
import { IQuestionListProps } from "./QuestionList.types";

export default function QuestionList(props: IQuestionListProps) {
  const router = useRouter();

  const [isAnswer, setIsAnswer] = useState(false);
  const [answerAddress, setAnswerAddress] = useState("");

  const { data: questionData, fetchMore } = useQuery(
    FETCH_USED_ITEM_QUESTIONS,
    {
      variables: { useditemId: router.query.productId },
    }
  );
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);

  const loadFunc = () => {
    if (!questionData) return;
    fetchMore({
      variables: {
        page: Math.ceil(questionData.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemQuestions)
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <ProductQuestionListUI
      questionData={questionData}
      loadFunc={loadFunc}
      loginData={loginData}
      isAnswer={isAnswer}
      setIsAnswer={setIsAnswer}
      answerAddress={answerAddress}
      setAnswerAddress={setAnswerAddress}
      itemData={props.itemData}
    />
  );
}

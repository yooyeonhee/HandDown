import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import AnswerListUI from "./AnswerList.presenter";
import {
  FETCH_USED_ITEM_QUESTIONS_ANSWER,
  FETCH_USER_LOGGED_IN,
} from "./AnswerList.queries";
import { IAnswerListProps } from "./AnswerList.types";

export default function AnswerList(props: IAnswerListProps) {
  const { data: answerData, refetch: answerRefetch } = useQuery(
    FETCH_USED_ITEM_QUESTIONS_ANSWER,
    {
      variables: { useditemQuestionId: props.addressId },
    }
  );
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);

  return (
    <AnswerListUI
      answerData={answerData}
      loginData={loginData}
      answerRefetch={answerRefetch}
    />
  );
}

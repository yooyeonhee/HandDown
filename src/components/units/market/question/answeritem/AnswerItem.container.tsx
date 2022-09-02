import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { MouseEvent } from "react";
import AnswerItemUI from "./AnswerItem.presenter";
import {
  DELETE_USED_ITEM_QUESTIONS_ANSWER,
  FETCH_USED_ITEM_QUESTIONS_ANSWER,
  FETCH_USER_LOGGED_IN,
} from "./AnswerItem.queries";
import { AnswerItemProps } from "./AnswerItem.types";

export default function AnswerItem(props: AnswerItemProps) {
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);
  const [deleteQuestionAnswer] = useMutation(DELETE_USED_ITEM_QUESTIONS_ANSWER);

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    const answerId = event.currentTarget.id;
    try {
      await deleteQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: answerId,
        },
      });

      Modal.success({
        content: "답변 삭제 완료.",
      });
      props.answerRefetch();
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <AnswerItemUI
      el={props.el}
      onClickDelete={onClickDelete}
      loginData={loginData}
    />
  );
}

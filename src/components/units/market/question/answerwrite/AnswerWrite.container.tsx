import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MutableRefObject, useRef, useState } from "react";
import AnswerWriteUI from "./AnswerWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTIONS_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./AnswerWrite.queries";
import { IAnswerWriteProps } from "./AnswerWrite.types";

export default function AnswerWrite(props: IAnswerWriteProps) {
  const [contents, setContents] = useState("");
  const [count, setCount] = useState(0);
  const inputRef = useRef() as MutableRefObject<HTMLTextAreaElement>;

  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    setCount(event.target.value.length);
  };

  const onClickSubmit = async () => {
    if (contents) {
      try {
        await createUseditemQuestionAnswer({
          variables: {
            createUseditemQuestionAnswerInput: {
              contents,
            },
            useditemQuestionId: props.answerAddress,
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTIONS_ANSWER,
              variables: {
                useditemQuestionId: props.answerAddress,
              },
            },
          ],
        });
        props.setAnswerAddress("");
      } catch (error: any) {
        alert(error.message);
      }
    }
  };

  return (
    <AnswerWriteUI
      onClickSubmit={onClickSubmit}
      onChangeContents={onChangeContents}
      count={count}
      inputRef={inputRef}
    />
  );
}

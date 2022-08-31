import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import QuestionWriteUI from "./QuestionWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  UPDATE_USED_ITEM_QUESTION,
} from "./QuestionWrite.queries";
import {
  IQuestionWriteProps,
  IQuestionWriteUIProps,
} from "./QuestionWrite.types";

export default function QuestionWrite(props: IQuestionWriteProps) {
  const [contents, setContents] = useState("");
  const [count, setCount] = useState(0);
  const router = useRouter();

  const [createQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    setCount(event.target.value.length);
  };

  const onClickSubmit = async () => {
    if (contents) {
      try {
        const result = await createQuestion({
          variables: {
            createUseditemQuestionInput: {
              contents,
            },
            useditemId: router.query.productId,
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTIONS,
              variables: {
                useditemId: router.query.productId,
              },
            },
          ],
        });
        Modal.success({ content: "문의글이 등록되었습니다." });
      } catch (error: any) {
        Modal.error({ content: error.message });
      }
    }
  };

  const onClickUpdate = async () => {
    if (!contents) {
      Modal.error({ content: "수정한 내용이 없습니다." });
      props.setAddress("");
      props.setIsEdit((prev: boolean) => !prev);
      return;
    }
    await updateQuestion({
      variables: {
        updateUseditemQuestionInput: {
          contents,
        },
        useditemQuestionId: props.address,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTIONS,
          variables: {
            useditemId: router.query.productId,
          },
        },
      ],
    });
    props.setAddress("");
    props.setIsEdit((prev: boolean) => !prev);
  };
  return (
    <QuestionWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeContents={onChangeContents}
      count={count}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}

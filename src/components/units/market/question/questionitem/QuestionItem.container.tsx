import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import QuestionItemUI from "./QuestionItem.presenter";
import {
  DELETE_USED_ITEM_QUESTIONS,
  FETCH_USED_ITEM_QUESTIONS,
  FETCH_USER_LOGGED_IN,
} from "./QuestionItem.queries";
import { IQuestionItemProps, IQuestionItemUIProps } from "./QuestionItem.types";

export default function QuestionItem(props: IQuestionItemProps) {
  const router = useRouter();
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);
  const [deleteQuestion] = useMutation(DELETE_USED_ITEM_QUESTIONS);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [questionId, setQuestionId] = useState("");

  const [address, setAddress] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const [isAnswer, setIsAnswer] = useState(false);

  const showModal = (event: MouseEvent<HTMLImageElement>) => {
    setIsModalVisible(true);
    setQuestionId(event.currentTarget.id);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    onClickDelete();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onClickDelete = async () => {
    try {
      await deleteQuestion({
        variables: {
          useditemQuestionId: questionId,
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
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  const onClickUpdate = async (event: MouseEvent<HTMLImageElement>) => {
    setAddress(event.currentTarget.id);
    setIsEdit((prev) => !prev);
  };

  return (
    <QuestionItemUI
      el={props.el}
      loginData={loginData}
      onClickDelete={onClickDelete}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isModalVisible={isModalVisible}
      onClickAnswer={onClickAnswer}
      address={address}
      onClickUpdate={onClickUpdate}
      isEdit={isEdit}
      setAddress={setAddress}
      setIsEdit={setIsEdit}
      itemData={props.itemData}
    />
  );
}

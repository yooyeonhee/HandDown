import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IFetchUseditemQuestions } from "../questionitem/QuestionItem.types";

export interface IQuestionWriteUIProps {
  onClickSubmit: () => Promise<void>;
  onClickUpdate: () => Promise<void>;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  isEdit: boolean;
  el: IFetchUseditemQuestions;
  count: number;
}
export interface IQuestionWriteProps {
  isEdit: boolean;
  setAddress: Dispatch<SetStateAction<string>>;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  address: string;
  el: IFetchUseditemQuestions;
}

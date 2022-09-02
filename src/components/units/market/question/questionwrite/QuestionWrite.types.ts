import { ChangeEvent, MutableRefObject } from "react";
import { IFetchUseditemQuestions } from "../questionitem/QuestionItem.types";

export interface IQuestionWriteUIProps {
  onClickSubmit?: () => Promise<void>;
  onClickUpdate?: () => Promise<void>;
  onChangeContents?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  isEdit?: boolean;
  el?: IFetchUseditemQuestions;
  count?: number;
  inputRef: MutableRefObject<HTMLTextAreaElement>;
}
export interface IQuestionWriteProps {
  isEdit?: boolean;
  setAddress?: any;
  setIsEdit?: any;
  address?: string;
  el?: IFetchUseditemQuestions;
}

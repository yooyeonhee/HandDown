import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IFetchUseditemQuestions } from "../questionitem/QuestionItem.types";

export interface IQuestionWriteUIProps {
  onClickSubmit?: () => Promise<void>;
  onClickUpdate?: () => Promise<void>;
  onChangeContents?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  isEdit?: boolean;
  el?: IFetchUseditemQuestions;
  count?: number;
}
export interface IQuestionWriteProps {
  isEdit?: boolean;
  setAddress?: any;
  setIsEdit?: any;
  address?: string;
  el?: IFetchUseditemQuestions;
}

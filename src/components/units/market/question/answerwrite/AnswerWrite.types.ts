import { ChangeEvent, Dispatch, MutableRefObject, SetStateAction } from "react";

export interface IAnswerWriteProps {
  answerAddress: string;
  setAnswerAddress: Dispatch<SetStateAction<string>>;
}

export interface IAnswerWriteUIProps {
  onClickSubmit: () => Promise<void>;
  onChangeContents?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  inputRef: MutableRefObject<HTMLTextAreaElement>;
  count: number;
}

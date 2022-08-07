import styled from "@emotion/styled";
import { ChangeEvent } from "react";

interface IInfoInputProps {
  title: string;
  placeholder: string | undefined;
  disabled?: boolean;
  type?: string;
  defaultValue?: string;
  readOnly?: boolean;
  register?: object;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void | undefined;
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const InputTitle = styled.div`
  width: 100%;
  font-size: 15px;
  font-family: level;
  font-weight: 400;
  color: #cbcbcb;
`;
const Input = styled.input``;

export default function InfoInput(props: IInfoInputProps) {
  return (
    <Wrapper>
      <InputTitle>{props.title}</InputTitle>
      <Input
        placeholder={props?.placeholder}
        onChange={props?.onChange}
        disabled={props?.disabled}
        type={props?.type}
        readOnly={props?.readOnly}
        defaultValue={props?.defaultValue}
        {...props?.register}
      ></Input>
    </Wrapper>
  );
}

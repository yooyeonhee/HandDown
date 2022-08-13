import styled from "@emotion/styled";
import React, { ChangeEvent } from "react";

interface IFormInputProps {
  label?: string;
  placeholder?: string | undefined;
  type?: string;
  defaultValue?: string;
  readOnly?: boolean;
  register?: object;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void | undefined;
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const InputLabel = styled.div`
  font-size: 25px;
  color: #444444;
  margin-right: 100px;
  :focus-within {
    color: #88d6ec;
  }
`;
const Input = styled.input`
  max-width: calc(100% - 32px);
  min-width: 50px;
  /* width: auto; */
  height: 50px;
  border: none;
  border-bottom: 2px solid #cbcbcb;
  color: #404040;
  font-size: 20px;
  :focus {
    outline: none;
    border-bottom: 2px solid #88d6ec;
  }
  ::placeholder {
    color: #b3b3b3;
  }
`;

export default function FormInput(props: IFormInputProps) {
  return (
    <Wrapper>
      <InputLabel>{props.label}</InputLabel>
      <Input
        contentEditable
        placeholder={props?.placeholder}
        onChange={props?.onChange}
        type={props?.type}
        readOnly={props?.readOnly}
        defaultValue={props?.defaultValue}
        {...props?.register}
      ></Input>
    </Wrapper>
  );
}

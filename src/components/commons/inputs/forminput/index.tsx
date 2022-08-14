import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";

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
  margin-bottom: 50px;
`;
const InputLabel = styled.div`
  width: 20%;
  font-size: 25px;
  color: #444444;
  /* margin-right: 100px; */
`;
const Input = styled.input`
  width: 80%;
  display: block;
  height: 50px;
  border: none;
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

import styled from "@emotion/styled";
import { ChangeEvent } from "react";

interface IInfoInputProps {
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
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0px;
`;
const InputLabel = styled.div`
  width: 100%;
  font-size: 15px;
  font-family: level;
  font-weight: 400;
  color: #cbcbcb;
  :focus-within {
    color: #88d6ec;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 2px solid #cbcbcb;
  color: #404040;
  font-size: 20px;
  :focus {
    outline: none;
    border-bottom: 2px solid #88d6ec;
  }
`;

export default function InfoInput(props: IInfoInputProps) {
  return (
    <Wrapper>
      <InputLabel>
        {props.label}
        <Input
          placeholder={props?.placeholder}
          onChange={props?.onChange}
          type={props?.type}
          readOnly={props?.readOnly}
          defaultValue={props?.defaultValue}
          {...props?.register}
        ></Input>
      </InputLabel>
    </Wrapper>
  );
}

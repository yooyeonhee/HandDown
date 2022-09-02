/* 게시글 등록에 사용되는 input 공통 컴포넌트 */
import styled from "@emotion/styled";
import { ChangeEvent } from "react";

interface IFormInputProps {
  label?: string;
  placeholder?: string | undefined;
  type?: string;
  defaultValue?: string | number;
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
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
  }
`;
const InputLabel = styled.div`
  width: 30%;
  font-size: 25px;
  color: #444444;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  /* margin-right: 100px; */
`;
const Input = styled.input`
  width: 100%;
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
  @media (max-width: 768px) {
    font-size: 12px;
    ::placeholder {
      font-size: 12px;
    }
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

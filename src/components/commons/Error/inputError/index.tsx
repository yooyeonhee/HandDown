import styled from "@emotion/styled";

interface IInputErrorProps {
  text?: string;
}
export const Error = styled.div`
  color: red;
  font-size: 9px;
  margin-left: 10px;
`;

export default function InputError(props: IInputErrorProps) {
  return <Error>{props.text}</Error>;
}

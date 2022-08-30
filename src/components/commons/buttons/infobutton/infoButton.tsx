/* 로그인, 회원가입 등 회원 정보 입력 폼에서 사용되는 button 공통 컴포넌트 */
import styled from "@emotion/styled";

interface IInfoButtonProps {
  title?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = styled.button`
  width: 345px;
  height: 50px;
  cursor: pointer;
  background-color: #88d6ec;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 600;
  border-radius: 10px;
  margin: 20px 0px;
`;

export default function InfoButton(props: IInfoButtonProps) {
  return (
    <Button onClick={props.onClick} type={props.type}>
      {props.title}
    </Button>
  );
}

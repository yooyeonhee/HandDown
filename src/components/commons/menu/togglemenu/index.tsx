import styled from "@emotion/styled";
import { Dispatch, SetStateAction } from "react";
interface IToggleMenuProps {
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
}
const Body = styled.div`
  width: 35%;
  min-width: 250px;
  height: 100vh;
  background-color: #f4f8f9;
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px;
  right: 0;
  top: 0;
  z-index: 10000;
  @media (min-width: 1000px) {
    display: none;
  }
`;
const CancelIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 30px;
  right: 30px;
`;
export default function ToggleMenu(props: IToggleMenuProps) {
  const onClickCancel = () => {
    props.setIsOpenMenu((isOpen: boolean) => !isOpen);
  };
  return (
    <Body>
      <CancelIcon src="/header/cancel.png" onClick={onClickCancel} />
    </Body>
  );
}

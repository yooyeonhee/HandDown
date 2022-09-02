import styled from "@emotion/styled";
import { Menu } from "antd";
import { Dispatch, SetStateAction } from "react";

export interface IFetchUserLoggedIn {
  name: string;
  email: string;
  userPoint: {
    amount: number;
  };
}

interface IToggleMenuProps {
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
  loginData: {
    fetchUserLoggedIn: IFetchUserLoggedIn;
  };
  onClickToLogin: () => void;
  onClickToSignup: () => void;
  onClickToMarket: () => void;
  onClickToMypage: () => void;
  onClickLogout: () => Promise<void>;
  onClickToNew: () => void;
  onClickToMyPoint: () => void;
  showModal: () => void;
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
const MainMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding: 30px;
`;

const MenuItem = styled.span`
  font-size: 18px;
  margin: 5px;
  cursor: pointer;
`;
const MenuSubItem = styled.span`
  font-size: 15px;
  margin: 5px;
  margin-left: 30px;
  cursor: pointer;
`;
export default function ToggleMenu(props: IToggleMenuProps) {
  const onClickCancel = () => {
    props.setIsOpenMenu((isOpen: boolean) => !isOpen);
  };
  return (
    <Body>
      <CancelIcon src="/header/cancel.png" onClick={onClickCancel} />
      {props.loginData ? (
        <MainMenu>
          <MenuItem>{props.loginData?.fetchUserLoggedIn.name}님</MenuItem>
          <MenuSubItem onClick={props.onClickToMypage}>내 장터</MenuSubItem>
          <MenuSubItem onClick={props.onClickToMyPoint}>내 포인트</MenuSubItem>
          <MenuSubItem onClick={props.onClickToNew}>상품 등록</MenuSubItem>
          <MenuSubItem onClick={props.showModal}>포인트 충전</MenuSubItem>
          <MenuItem onClick={props.onClickLogout}>로그아웃</MenuItem>
          <MenuItem onClick={props.onClickToMarket}>shop</MenuItem>
        </MainMenu>
      ) : (
        <MainMenu>
          <MenuItem onClick={props.onClickToLogin}>로그인</MenuItem>
          <MenuItem onClick={props.onClickToSignup}>회원가입</MenuItem>
          <MenuItem onClick={props.onClickToMarket}>shop</MenuItem>
        </MainMenu>
      )}
    </Body>
  );
}

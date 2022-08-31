import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import HeaderUI from "./Header.presenter";
import { FETCH_USER_LOGGED_IN, LOG_OUT_USER } from "./Header.queries";

export default function Header() {
  const router = useRouter();
  const HIDDEN_MENU = ["/", "/market", `/market/${router.query.productId}`];
  const isHiddenMenu = HIDDEN_MENU.includes(router.asPath);
  const [isOpenMenu, setIsOpenMenu] = useState(false); // 메뉴의 초기값을 false로 설정
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation(LOG_OUT_USER);
  const onClickToLogin = () => {
    router.push("/users/login");
  };
  const onClickToSignup = () => {
    router.push("/users/signup");
  };
  const onClickToMarket = () => {
    router.push("/market");
  };
  const onClickToMypage = () => {
    router.push("/users/mymarket");
  };
  const onClickToMain = () => {
    router.push("/");
  };
  const onClickToNew = () => {
    router.push("/market/new");
  };
  const onClickLogout = async () => {
    try {
      await logoutUser();
      router.push(`/users/login`);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  const onClickMenu = () => {
    setIsOpenMenu((isOpen) => !isOpen);
  };
  return (
    <HeaderUI
      isHiddenMenu={isHiddenMenu}
      onClickToLogin={onClickToLogin}
      onClickToSignup={onClickToSignup}
      onClickToMarket={onClickToMarket}
      onClickToMypage={onClickToMypage}
      onClickLogout={onClickLogout}
      onClickMenu={onClickMenu}
      data={data}
      isOpenMenu={isOpenMenu}
      setIsOpenMenu={setIsOpenMenu}
      onClickToMain={onClickToMain}
      onClickToNew={onClickToNew}
    />
  );
}

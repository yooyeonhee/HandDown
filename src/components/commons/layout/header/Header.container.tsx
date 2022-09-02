import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import HeaderUI from "./Header.presenter";
import { FETCH_USER_LOGGED_IN, LOG_OUT_USER } from "./Header.queries";

export default function Header() {
  const router = useRouter();
  const HIDDEN_MENU = [
    "/",
    "/market",
    `/market/${router.query.productId}`,
    `/market/${router.query.productId}/edit`,
  ];
  const isHiddenMenu = HIDDEN_MENU.includes(router.asPath);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);
  const [menuSelect, setMenuSelect] = useState([true, false, false, false]);
  const [logoutUser] = useMutation(LOG_OUT_USER);
  const showModal = () => {
    setIsModalVisible(true);
    setIsOpenMenu(false);
  };
  const onClickToLogin = () => {
    router.push("/users/login");
    setIsOpenMenu(false);
  };
  const onClickToSignup = () => {
    router.push("/users/signup");
    setIsOpenMenu(false);
  };
  const onClickToMarket = () => {
    router.push("/market");
    setIsOpenMenu(false);
  };
  const onClickToMypage = () => {
    router.push("/users/mymarket");
    setMenuSelect([true, false, false, false]);
    setIsOpenMenu(false);
  };
  const onClickToMyPoint = () => {
    router.push("/users/mypoint");
    setMenuSelect([false, true, false, false]);
    setIsOpenMenu(false);
  };
  const onClickToMain = () => {
    router.push("/");
  };
  const onClickToNew = () => {
    router.push("/market/new");
    setMenuSelect([false, false, true, false]);
    setIsOpenMenu(false);
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
      loginData={loginData}
      isOpenMenu={isOpenMenu}
      setIsOpenMenu={setIsOpenMenu}
      onClickToMain={onClickToMain}
      onClickToNew={onClickToNew}
      onClickToMyPoint={onClickToMyPoint}
      isModalVisible={isModalVisible}
      showModal={showModal}
      setIsModalVisible={setIsModalVisible}
      menuSelect={menuSelect}
      setMenuSelect={setMenuSelect}
    />
  );
}

import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import HeaderUI from "./Header.presenter";
import { FETCH_USER_LOGGED_IN, LOG_OUT_USER } from "./Header.queries";

export default function Header() {
  const router = useRouter();
  const HIDDEN_MENU = ["/", "/market", `/market/${router.query.productId}`];
  const isHiddenMenu = HIDDEN_MENU.includes(router.asPath);
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
    router.push("/mypage");
  };
  const onClickLogout = async () => {
    try {
      await logoutUser();
      router.push(`/users/login`);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  return (
    <HeaderUI
      isHiddenMenu={isHiddenMenu}
      onClickToLogin={onClickToLogin}
      onClickToSignup={onClickToSignup}
      onClickToMarket={onClickToMarket}
      onClickToMypage={onClickToMypage}
      onClickLogout={onClickLogout}
      data={data}
    />
  );
}

import { useRouter } from "next/router";
import HeaderUI from "./Header.presenter";

export default function Header() {
  const router = useRouter();
  const HIDDEN_MENU = ["/", "/market", "/market/detail"];

  const isHiddenMenu = HIDDEN_MENU.includes(router.asPath);
  const onClickToLogin = () => {
    router.push("/users/login");
  };
  const onClickToSignup = () => {
    router.push("/users/signup");
  };
  const onClickToMarket = () => {
    router.push("/market");
  };
  return (
    <HeaderUI
      isHiddenMenu={isHiddenMenu}
      onClickToLogin={onClickToLogin}
      onClickToSignup={onClickToSignup}
      onClickToMarket={onClickToMarket}
    />
  );
}

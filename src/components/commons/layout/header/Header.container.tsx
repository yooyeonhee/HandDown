import { useRouter } from "next/router";
import HeaderUI from "./Header.presenter";

export default function Header() {
  const router = useRouter();
  const HIDDEN_MENU = ["/", "/market", "/market/detail"];

  const isHiddenMenu = HIDDEN_MENU.includes(router.asPath);
  return <HeaderUI isHiddenMenu={isHiddenMenu} />;
}

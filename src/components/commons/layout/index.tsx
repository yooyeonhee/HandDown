import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import Header from "./header/Header.container";

const Body = styled.div`
  width: 100%;
  height: 100vh;
`;
interface ILayoutProps {
  children: ReactNode;
}
export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const HIDDEN_HEADERS = ["/users/login", "/users/signup", "/"];

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <>
      {!isHiddenHeader && <Header />}
      <Body>{props.children}</Body>;
    </>
  );
}

import styled from "@emotion/styled";
import { IPageProps } from "./MypagePagination.types";

export const Body = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Page = styled.span`
  margin: 0px 10px;
  color: ${(props: IPageProps) => (props.isActive ? "#88d6ec" : "#4444")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 300px;
`;
export const Button = styled.button`
  border: none;
  background-color: white;
  margin: 0px 10px;
  color: ${(props: IPageProps) => (props.isActive ? "#88d6ec" : "#4444")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;

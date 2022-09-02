import styled from "@emotion/styled";
import { ITableOption } from "./MyProduct.types";

export const Body = styled.div`
  width: 80%;
  margin: 0px auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TableOptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
  @media (max-width: 768px) {
    margin: 10px 0px;
    margin-left: 20px;
  }
`;
export const TableOption = styled.div`
  cursor: pointer;
  font-weight: ${(props: ITableOption) => (props.isSelect ? "600" : "400")};
  color: ${(props: ITableOption) => (props.isSelect ? "#88D6EC" : "#cccccc")};
  font-size: ${(props: ITableOption) => (props.isSelect ? "18px" : "15px")};
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const TableBottom = styled.div`
  border-bottom: 2px solid #e5e5e5;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid #e5e5e5;
`;
export const TableTop = styled.div`
  border-top: 2px solid #e5e5e5;
  margin-top: 20px;
`;

export const ColumnHeaderBasic = styled.div`
  width: 20%;
  text-align: center;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ColumnHeaderTitle = styled.div`
  width: 40%;
  text-align: center;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ColumnBasic = styled.div`
  width: 20%;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ColumnTitle = styled.div`
  width: 40%;
  text-align: center;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;

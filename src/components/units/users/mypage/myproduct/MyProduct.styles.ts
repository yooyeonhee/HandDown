import styled from "@emotion/styled";

export const Body = styled.div`
  width: 80%;
  margin: 0px auto;
`;

export const TableOptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
`;
export const TableOption = styled.div`
  font-size: 15px;
  cursor: pointer;
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
  width: 12%;
  text-align: center;
  font-weight: 700;
`;

export const ColumnHeaderTitle = styled.div`
  width: 60%;
  text-align: center;
  font-weight: 700;
`;

export const ColumnBasic = styled.div`
  width: 12%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 60%;
  text-align: center;
  cursor: pointer;
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

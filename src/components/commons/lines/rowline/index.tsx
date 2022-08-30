/* 가로 100% 길이의 구분선  */
import styled from "@emotion/styled";

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #e5e5e5;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
export default function RowLine() {
  return <Line />;
}

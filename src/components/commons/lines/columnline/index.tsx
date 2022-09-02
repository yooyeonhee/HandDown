/* 세로 100% 길이의 구분선  */
import styled from "@emotion/styled";

const Line = styled.div`
  height: auto;
  width: 2px;
  background-color: #e5e5e5;
  margin: 0px 20px;
`;
export default function ColumnLine() {
  return <Line />;
}

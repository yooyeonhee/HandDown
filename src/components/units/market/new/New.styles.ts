import styled from "@emotion/styled";

export const Body = styled.div`
  width: 80%;
  margin: 0px auto;
`;
export const Wrapper = styled.div`
  width: 100%;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  font-size: 35px;
  color: #444444;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const ImageItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: auto;
  white-space: nowrap;
  cursor: pointer;
`;
export const ImageItem = styled.div`
  min-width: 80px;
  width: 22vw;
  height: 18vw;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  background-color: #fff;
  margin-right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

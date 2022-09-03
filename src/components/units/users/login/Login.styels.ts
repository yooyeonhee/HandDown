import styled from "@emotion/styled";
export const Body = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #bedfee;
  display: flex;
  align-items: center;
  @media (max-width: 576px) {
    background-color: white;
  }
`;
export const Wrapper = styled.div`
  width: 1000px;
  height: 700px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 3px 5px 45px;
  display: flex;
  flex-direction: row;
  margin: 0px auto;
  @media (max-width: 1000px) {
    width: 450px;
  }
  @media (max-width: 576px) {
    box-shadow: none;
  }
`;
export const MainImg = styled.img`
  width: 550px;
  height: 700px;
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const FormWrapper = styled.div`
  width: 100%;
  padding: 90px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Logo = styled.img`
  width: 300px;
  height: 80px;
  margin: 20px 0px;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 35px;
  font-weight: 800;
  font-family: Level;
  color: #404040;
`;
export const InputForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const AlertWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;
export const AlertMessage = styled.div`
  font-size: 12px;
  color: #cbcbcb;
`;
export const AlertButton = styled.button`
  width: 90px;
  height: 35px;
  border: 3px solid #88d6ec;
  background-color: white;
  color: #88d6ec;
  border-radius: 10px;
  cursor: pointer;
`;

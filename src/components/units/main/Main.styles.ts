import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
export const motion = keyframes`
  0% {
    margin-right:5px;
  }
  100% {
    margin-right:15px;
  }
`;
export const Body = styled.div`
  width: 100%;
`;
export const ContentWrapper = styled.div`
  width: 100%;
  height: 40vw;
  position: relative;
`;
export const ContentImg = styled.img`
  width: 100%;
  height: 40vw;
`;
export const GoShop = styled.div`
  position: absolute;
  right: 20%;
  bottom: 30%;
  color: #45596c;
  font-family: "LevelB";
  font-size: 1.2vw;
  font-weight: 400;
  cursor: pointer;
  animation: ${motion} 0.3s linear 0s infinite alternate;
`;
export const AboutWrapper = styled.div`
  width: 80%;
  height: 600px;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    height: 600px;
  }
  @media (max-width: 768px) {
    height: 500px;
  }
`;
export const AboutTextWrapper = styled.div`
  width: 60%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 1000px) {
    width: 100%;
    height: 250px;
  }
`;
export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  @media (max-width: 1000px) {
    margin-bottom: 20px;
  }
`;
export const Label = styled.div`
  font-size: 45px;
  font-family: Football_B;
  color: #444444;
  @media (max-width: 1000px) {
    font-size: 35px;
  }
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;
export const Text = styled.div`
  color: #444444;
  font-size: 20px;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
export const AboutImg = styled.img`
  width: 40%;
  min-width: 300px;
  height: 20vw;
  min-height: 180px;
  object-fit: cover;
  @media (max-width: 1000px) {
    font-size: 35px;
    margin-bottom: 30px;
  }
`;
export const BestItemWrapper = styled.div`
  width: 100%;
  margin: 0px auto;
  height: 100%;
  background-color: #e8edee;
  padding: 10%;
  display: flex;
  flex-direction: column;
`;
export const ItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

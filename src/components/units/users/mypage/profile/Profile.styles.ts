import styled from "@emotion/styled";

export const Body = styled.div`
  width: 80%;
  margin: 0px auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  font-size: 35px;
  color: #444444;
  font-weight: 600;
  margin: 30px 0px;
  @media (max-width: 768px) {
    font-size: 25px;
    margin: 20px 0px;
    margin-left: 20px;
  }
`;
export const ProfileWrapper = styled.div`
  background-color: #e8edee;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 30px;
  }
`;
export const ProfileLeftInfo = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  @media (max-width: 900px) {
    display: none;
  }
`;
export const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 90%;
`;
export const ProfileName = styled.div`
  font-size: 20px;
`;
export const ProfileRightInfo = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const CircleInfo = styled.div`
  width: 15vw;
  height: 15vw;
  min-width: 160px;
  min-height: 160px;
  background-color: white;
  border-radius: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
  @media (max-width: 900px) {
    min-width: 120px;
    min-height: 120px;
  }
  @media (max-width: 768px) {
    min-width: 100px;
    min-height: 100px;
  }
`;
export const InfoIcon = styled.img`
  width: 40px;
  height: 40px;
  @media (max-width: 900px) {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
`;
export const InfoTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin: 10px 0px;
  @media (max-width: 900px) {
    font-size: 15px;
    margin: 5px 0px;
  }
`;
export const InfoCount = styled.span`
  font-weight: 500;
  font-size: 25px;
  @media (max-width: 900px) {
    font-size: 16px;
  }
`;
export const CountUnit = styled.span`
  font-weight: 500;
  font-size: 22px;
  @media (max-width: 900px) {
    font-size: 18px;
  }
`;

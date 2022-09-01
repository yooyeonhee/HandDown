import styled from "@emotion/styled";

export const Body = styled.div`
  width: 80%;
  margin: 0px auto;
`;

export const Title = styled.div`
  font-size: 35px;
  color: #444444;
  font-weight: 600;
  margin: 30px 0px;
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;
export const ProfileWrapper = styled.div`
  background-color: #e8edee;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  margin: 20px auto;
`;
export const ProfileLeftInfo = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;
export const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 90%;
`;
export const ProfileEmail = styled.div`
  font-size: 15px;
  margin-top: 20px;
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
  min-width: 170px;
  min-height: 170px;
  background-color: white;
  border-radius: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const InfoIcon = styled.img`
  width: 40px;
  height: 40px;
`;
export const InfoTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin: 10px 0px;
`;
export const InfoCount = styled.span`
  font-weight: 500;
  font-size: 25px;
`;
export const CountUnit = styled.span`
  font-weight: 500;
  font-size: 22px;
`;

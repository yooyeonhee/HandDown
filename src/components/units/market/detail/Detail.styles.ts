import styled from "@emotion/styled";

export const Body = styled.div`
  width: 80%;
  margin: 0px auto;
`;
export const Title = styled.div`
  font-size: 35px;
  color: #444444;
  font-weight: 600;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 10px;
  }
`;
export const ItemInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;
export const ItemImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 768px) {
    margin: 0px auto;
    margin-bottom: 20px;
  }
`;

export const SubImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-right: 30px;
  @media (max-width: 768px) {
    margin-right: 5px;
  }
`;
export const SubImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 10px;
  background-color: beige;
  margin-bottom: 10px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 5px;
    width: 45px;
    height: 45px;
    border-radius: 5px;
  }
`;
export const Img = styled.img`
  width: 20vw;
  min-width: 300px;
  height: 20vw;
  min-height: 300px;
  border-radius: 20px;
  background-color: wheat;
  @media (max-width: 768px) {
    margin-bottom: 20px;
    min-width: 220px;
    min-height: 220px;
  }
`;
export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 50px;
  @media (max-width: 768px) {
    padding-left: 0px;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
export const ItemTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #444444;
  @media (max-width: 900px) {
    font-size: 25px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
export const ItemIsSold = styled.div`
  min-width: 50px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  margin-left: 20px;
  color: white;
  background-color: #88d6ec;
  padding: 5px;
  border-radius: 5px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const ItemRemark = styled.div`
  font-size: 18px;
  color: #484848;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const ItemArea = styled.div`
  font-size: 18px;
  color: #484848;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ItemPrice = styled.div`
  font-size: 40px;
  color: #444444;
  font-weight: 600;
  margin: 30px 0px;
  @media (max-width: 900px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    margin: 20px 0px;
    width: 100%;
    font-size: 24px;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    margin: 0px auto;
  }
`;
export const PickBtn = styled.button`
  width: 140px;
  height: 55px;
  border-radius: 10px;
  border: 3px solid #88d6ec;
  color: #88d6ec;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  margin-right: 30px;
  @media (max-width: 900px) {
    width: 120px;
    height: 45px;
    font-size: 12px;
  }
`;
export const BuyBtn = styled.button`
  width: 140px;
  height: 55px;
  border-radius: 10px;
  border: none;
  color: #ffffff;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #88d6ec;
  @media (max-width: 900px) {
    width: 120px;
    height: 45px;
    font-size: 12px;
  }
`;
export const PickIcon = styled.img`
  width: 17px;
  height: 17px;
  margin-left: 10px;
  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
`;
export const SubTitle = styled.div`
  width: 80%;
  margin: 0px auto;
  font-size: 24px;
  font-weight: 700;
  color: #444444;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    margin: 0px;
    margin-bottom: 20px;
    font-size: 20px;
  }
`;
export const SubIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;
export const ItemContent = styled.div`
  width: 80%;
  min-height: 200px;
  margin: 0px auto;
  padding: 50px 0px;
  font-size: 20px;
  font-weight: 400;
  color: #444444;
  @media (max-width: 768px) {
    padding: 0px;
    margin: 0px;
    font-size: 16px;
    min-height: 100px;
  }
`;
export const Map = styled.div`
  width: 750px;
  height: 450px;
  margin: 50px auto;
  @media (max-width: 768px) {
    width: 100%;
    height: 50vw;
    margin-bottom: 20px;
  }
`;

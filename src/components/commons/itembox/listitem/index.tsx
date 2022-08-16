import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100%;
  height: 250px;
  padding: 50px 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #bdbdbd;
  margin-bottom: 50px;
`;
export const ItemImg = styled.div`
  width: 200px;
  height: 200px;
  background-color: aliceblue;
  border-radius: 20px;
`;
export const ItemInfoWrapper = styled.div`
  width: 60%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const ItemTitle = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #444444;
`;
export const ItemRemark = styled.div`
  font-size: 18px;
  color: #444444;
  margin-bottom: 10px;
`;
export const ItemUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
export const ItemUserIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
export const ItemUserInfo = styled.div`
  font-size: 18px;
  margin-right: 15px;
  color: #444444;
`;
export const ItemCreatedAt = styled.div`
  font-size: 15px;
  color: #b0abab;
`;

export const ItemPrice = styled.div`
  width: 10%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 25px;
  color: #444444;
  font-weight: 600;
`;
export default function ListItem() {
  return (
    <Body>
      <ItemImg />
      <ItemInfoWrapper>
        <ItemTitle>아기 옷 팔아요</ItemTitle>
        <ItemRemark>포장도 뜯지않았습니다.</ItemRemark>
        <ItemUserInfoWrapper>
          <ItemUserIcon src="/list/icons/user.png" />
          <ItemUserInfo>홍길동</ItemUserInfo>
          <ItemUserIcon src="/list/icons/pick.png" />
          <ItemUserInfo>20</ItemUserInfo>
        </ItemUserInfoWrapper>
        <ItemCreatedAt>2021.02.22</ItemCreatedAt>
      </ItemInfoWrapper>
      <ItemPrice>3,000원</ItemPrice>
    </Body>
  );
}

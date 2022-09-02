import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HeaderWrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    justify-content: flex-start;
    height: 90px;
  }
`;
export const Logo = styled.img`
  width: 25%;
  min-width: 250px;
`;
export const BurgerMenu = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 10%;
  top: 50px;
  @media (max-width: 768px) {
    top: 30px;
  }
`;
export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 10%;
  top: 50px;
  @media (max-width: 1000px) {
    display: none;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;
export const NavItem = styled.span`
  font-size: 18px;
  color: #444444;
  margin-right: 30px;
  font-weight: 600;
  cursor: pointer;
`;
export const NavShop = styled.div`
  width: 65px;
  height: 30px;
  color: #444444;
  background-color: #bedae7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
`;
export const MenuWrapper = styled.div`
  width: 80%;
  /* max-width: 1200px; */
  height: 60px;
  border-top: 2px solid #e8edee;
  border-bottom: 2px solid #e8edee;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Menu = styled.div`
  margin-right: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;
export const MenuIcon = styled.img`
  margin-right: 10px;
  height: 20px;
`;
export const MenuChargeIcon = styled.img`
  margin-right: 10px;
  height: 25px;
`;
export const MenuTitle = styled.div`
  font-size: 18px;
  color: #828282;
  font-weight: 600;
`;

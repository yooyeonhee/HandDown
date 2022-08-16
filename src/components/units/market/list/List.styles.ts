import styled from "@emotion/styled";

export const Body = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const SearchBarWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 30px;
`;
export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #444444;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const MoreIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;
export const SearchBar = styled.div`
  width: 400px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border: 2px solid #88d6ec;
`;
export const SearchIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
export const SearchInput = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  outline: none;
  font-size: 16px;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ccc;
  }
`;
export const ListWrapper = styled.div`
  width: 100%;
`;

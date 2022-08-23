import styled from "@emotion/styled";

export const UploadImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin: 10px;
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const UploadButton = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 2px solid #cbcbcb;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;
export const Plus = styled.div`
  font-size: 40px;
  font-weight: 300;
  color: #cbcbcb;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;

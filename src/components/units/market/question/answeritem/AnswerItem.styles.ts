import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100%;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const AnswerWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
`;
export const ProfileImg = styled.div`
  width: 45px;
  height: 45px;
  margin-right: 15px;
`;
export const Img = styled.img`
  width: 45px;
  height: 45px;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;
export const AnswerInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 20px 0px 0px 0px;
`;
export const AnswerNameFunc = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const AnswerName = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const FuncOption = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const EditIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
`;
export const DeleteModalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const DeleteIcon = styled.img`
  width: 20px;
  height: 20px;
  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
`;
export const DeleteModal = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-left: 20px;
`;
export const AnswerIcon = styled.img`
  width: 20x;
  height: 20px;
  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
`;
export const AnswerContent = styled.pre`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
  margin: 5px 0px 20px 0px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const AnswerDate = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #bdbdbd;
`;

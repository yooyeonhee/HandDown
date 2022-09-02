import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px auto;
`;
export const AnswerInputWrapper = styled.div`
  width: 100%;
  margin: 50px auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const AnswerTitle = styled.div`
  width: 100%;
  height: 100px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
export const AnswerTitleIcon = styled.img`
  margin-right: 10px;
  margin-left: 10px;
`;
export const AnswerInput = styled.div`
  width: 100%;
  height: auto;
`;

export const AnswerWrite = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #e8edee;
  display: flex;
  flex-direction: column;
`;
export const AnswerWriteText = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 20px;
  resize: none;
  border: none;
  border-bottom: 1px solid #f2f2f2;
  outline: none;
  &::placeholder {
    color: #bdbdbd;
  }
  @media (max-width: 768px) {
    padding: 5px;
    &::placeholder {
      font-size: 8px;
    }
  }
`;
export const AnswerWriteSubmit = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const AnswerWriteTextCount = styled.span`
  margin-left: 20px;
  color: #bdbdbd;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const AnswerWriteSubmitButton = styled.button`
  height: 50px;
  width: 90px;
  background-color: #88d6ec;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: white;
  border: none;
  @media (max-width: 768px) {
    height: 30px;
    width: 70px;
    font-size: 12px;
  }
`;

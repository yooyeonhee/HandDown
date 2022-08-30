import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100%;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const QuestionWrapper = styled.div`
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
`;
export const QuestionInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 20px 0px 0px 0px;
`;
export const QuestionNameFunc = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const QuestionName = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
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
`;
export const DeleteModalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const DeleteIcon = styled.img`
  width: 20px;
  height: 20px;
`;
export const DeleteModal = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-left: 20px;
`;
// export const DeleteModalIcon = styled(ExclamationCircleOutlined)`
//   font-size: 20px;
// `;
export const AnswerIcon = styled.img`
  width: 20x;
  height: 20px;
`;
export const QuestionContent = styled.pre`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
  margin: 5px 0px 20px 0px;
`;
export const QuestionDate = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #bdbdbd;
`;

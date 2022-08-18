import styled from "@emotion/styled";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Body = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0px auto;
`;
export const Wrapper = styled.div`
  width: 100%;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  font-size: 35px;
  color: #444444;
  font-weight: 600;
  margin-bottom: 50px;
`;

export const ImageItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: auto;
  white-space: nowrap;
  margin-bottom: 50px;
  cursor: pointer;
`;
export const ImageItem = styled.div`
  min-width: 80px;
  width: 22vw;
  height: 18vw;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  background-color: #fff;
  margin-right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InputLabel = styled.div`
  font-size: 25px;
  color: #444444;
  width: 100%;
  margin-bottom: 30px;
`;
export const InputQuill = styled(ReactQuill)`
  width: 100%;
  height: 300px;
  margin-bottom: 70px;
`;
export const ChooseWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;
`;
export const ChooseDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
`;

export const ChooseOption = styled.input`
  margin-right: 5px;
`;
export const ChooseLabel = styled.span`
  font-size: 18px;
  margin-right: 50px;
  margin-left: 10px;
`;
export const AddressWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
`;
export const Map = styled.div`
  min-width: 450px;
  height: 300px;
`;
export const AddressInputWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 50px;
`;
export const PostCode = styled.span`
  color: #b3b3b3;
  font-size: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;
export const PostCodeBtn = styled.button`
  width: 90px;
  height: 35px;
  margin-left: 30px;
  border: 3px solid #88d6ec;
  background-color: white;
  color: #88d6ec;
  border-radius: 10px;
  font-size: 12px;
  cursor: pointer;
`;
export const Input = styled.input`
  width: 100%;
  display: block;
  height: 50px;
  border: none;
  color: #404040;
  font-size: 20px;
  margin-bottom: 30px;
  :focus {
    outline: none;
    border-bottom: 2px solid #88d6ec;
  }
  ::placeholder {
    color: #b3b3b3;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const CancelBtn = styled.button`
  width: 150px;
  height: 60px;
  background-color: #cbcbcb;
  border-radius: 10px;
  color: white;
  border: none;
  font-size: 20px;
  margin-right: 30px;
`;
export const SubmitBtn = styled.button`
  width: 150px;
  height: 60px;
  background-color: #88d6ec;
  border-radius: 10px;
  color: white;
  border: none;
  font-size: 20px;
`;

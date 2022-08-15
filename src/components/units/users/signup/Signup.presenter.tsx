import InfoButton from "../../../commons/buttons/infobutton/infoButton";
import DecoBox from "../../../commons/decoration/decobox";
import InfoInput from "../../../commons/inputs/infoinput/InfoInput";
import * as S from "./Signup.styles";
export default function SignupUI() {
  return (
    <S.Body>
      <S.Wrapper>
        <S.MainImg src="/users/signup/signup_main.png" />
        <S.FormWrapper>
          <S.Logo></S.Logo>
          <S.Title>회원가입</S.Title>
          <DecoBox />
          <S.InputForm>
            <InfoInput label="이메일" type="string" />
            <InfoInput label="이름" type="string" />
            <InfoInput label="비밀번호" type="password" />
            <InfoInput label="비밀번호 확인" type="password" />
            <InfoButton title="회원가입" />
          </S.InputForm>
        </S.FormWrapper>
      </S.Wrapper>
    </S.Body>
  );
}

import InfoButton from "../../../commons/buttons/infobutton/infoButton";
import InfoInput from "../../../commons/inputs/infoinput/InfoInput";
import * as S from "./Login.styels";
export default function LoginUI() {
  return (
    <S.Body>
      <S.Wrapper>
        <S.MainImg src="/users/signup/login_main.png" />
        <S.FormWrapper>
          <S.Logo></S.Logo>
          <S.Title>로그인</S.Title>
          <S.DecoBox />
          <S.InputForm>
            <InfoInput label="이메일" type="string" />
            <InfoInput label="비밀번호" type="password" />
            <InfoButton title="로그인" />
          </S.InputForm>
          <S.AlertWrapper>
            <S.AlertMessage>아직 회원이 아니신가요?</S.AlertMessage>
            <S.AlertButton>회원가입</S.AlertButton>
          </S.AlertWrapper>
        </S.FormWrapper>
      </S.Wrapper>
    </S.Body>
  );
}

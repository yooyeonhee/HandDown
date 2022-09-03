import InfoButton from "../../../commons/buttons/infobutton/infoButton";
import DecoBox from "../../../commons/decoration/decobox";
import InfoInput from "../../../commons/inputs/infoinput/InfoInput";
import * as S from "./Login.styels";
import { ILoginUIProps } from "./Login.types";
export default function LoginUI(props: ILoginUIProps) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.MainImg src="/users/signup/login_main.png" />
        <S.FormWrapper>
          <S.Logo src="/logo/logo.png" onClick={props.onClickToBack} />
          <S.Title>로그인</S.Title>
          <DecoBox />
          <S.InputForm onSubmit={props.handleSubmit(props.onClickLogin)}>
            <InfoInput
              label="이메일"
              type="string"
              register={props.register("email")}
            />
            <InfoInput
              label="비밀번호"
              type="password"
              register={props.register("password")}
            />
            <InfoButton title="로그인" />
          </S.InputForm>
          <S.AlertWrapper>
            <S.AlertMessage>아직 회원이 아니신가요?</S.AlertMessage>
            <S.AlertButton onClick={props.onClickToSignup}>
              회원가입
            </S.AlertButton>
          </S.AlertWrapper>
        </S.FormWrapper>
      </S.Wrapper>
    </S.Body>
  );
}

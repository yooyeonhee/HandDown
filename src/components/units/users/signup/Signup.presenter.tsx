import InfoButton from "../../../commons/buttons/infobutton/infoButton";
import DecoBox from "../../../commons/decoration/decobox";
import InputError from "../../../commons/Error/inputError";
import InfoInput from "../../../commons/inputs/infoinput/InfoInput";
import * as S from "./Signup.styles";
import { ISignupProps } from "./Signup.types";
export default function SignupUI(props: ISignupProps) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.MainImg src="/users/signup/signup_main.png" />
        <S.FormWrapper>
          <S.Logo></S.Logo>
          <S.Title>회원가입</S.Title>
          <DecoBox />
          <S.InputForm onSubmit={props.handleSubmit(props.onClickSignUp)}>
            <InfoInput
              label="이메일"
              type="string"
              register={props.register("email")}
            />
            <InputError
              text={props.formState.errors.email?.message}
            ></InputError>
            <InfoInput
              label="이름"
              type="string"
              register={props.register("name")}
            />
            <InputError
              text={props.formState.errors.name?.message}
            ></InputError>
            <InfoInput
              label="비밀번호"
              type="password"
              register={props.register("password")}
            />
            <InputError
              text={props.formState.errors.password?.message}
            ></InputError>
            <InfoInput
              label="비밀번호 확인"
              type="password"
              register={props.register("passwordConfirm")}
            />
            <InputError
              text={props.formState.errors.passwordConfirm?.message}
            ></InputError>
            <InfoButton title="회원가입" />
          </S.InputForm>
        </S.FormWrapper>
      </S.Wrapper>
    </S.Body>
  );
}

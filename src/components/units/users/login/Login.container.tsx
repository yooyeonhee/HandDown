import { useRouter } from "next/router";
import LoginUI from "./Login.presenter";
import * as yup from "yup";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { LOGIN_USER } from "./Login.queries";
import { IData } from "./Login.types";
const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup.string().required("비밀번호는 필수 입력 사항입니다."),
});

export default function Login() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUser] = useMutation(LOGIN_USER);
  const onClickToSignup = () => {
    router.push("/users/signup");
  };
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogin = async (data: IData) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);
      Modal.success({
        content: "로그인 성공",
        onOk() {
          router.push(`/`);
        },
      });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  return (
    <LoginUI
      onClickToSignup={onClickToSignup}
      onClickLogin={onClickLogin}
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
    />
  );
}

import SignupUI from "./Signup.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { CREATE_USER } from "./Signup.queries";
import { IData } from "./Signup.types";
const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  name: yup.string().required("이름은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 4자리 이상 15자리 이하로 입력해주세요.")
    .max(15, "비밀번호는 4자리 이상 15자리 이하로 입력해주세요.")
    .required("비밀번호는 필수 입력 사항입니다."),
  passwordConfirm: yup
    .string()
    .min(4, "비밀번호는 4자리 이상 15자리 이하로 입력해주세요.")
    .max(15, "비밀번호는 4자리 이상 15자리 이하로 입력해주세요.")
    .required("비밀번호는 필수 입력 사항입니다.")
    .oneOf([yup.ref("password"), null], "비밀번호가 다릅니다."),
});
export default function Signup() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const { register, handleSubmit, formState, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignUp = async (data: IData) => {
    console.log(data);
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            name: data.name,
            password: data.password,
          },
        },
      });
      Modal.success({
        content: "회원가입을 축하합니다.",
        onOk() {
          router.push(`/users/login`);
        },
      });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  return (
    <SignupUI
      register={register}
      handleSubmit={handleSubmit}
      onClickSignUp={onClickSignUp}
      formState={formState}
    />
  );
}

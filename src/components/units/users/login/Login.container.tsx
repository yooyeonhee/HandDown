import { useRouter } from "next/router";
import LoginUI from "./Login.presenter";

export default function Login() {
  const router = useRouter();
  const onClickToSignup = () => {
    router.push("/users/signup");
  };
  return <LoginUI onClickToSignup={onClickToSignup} />;
}

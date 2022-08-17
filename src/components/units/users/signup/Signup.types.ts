import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IData {
  email?: string;
  name?: string;
  password?: string;
  passwordConfirm?: string;
}

export interface ILoginProps {
  register: UseFormRegister<IData>;
  handleSubmit: UseFormHandleSubmit<IData>;
  onClickSignUp: (data: IData) => Promise<void>;
  formState: FormState<IData>;
}

import {
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IData {
  email?: string;
  password?: string;
}

export interface ILoginUIProps {
  onClickToSignup: () => void;
  register: UseFormRegister<IData>;
  handleSubmit: UseFormHandleSubmit<IData>;
  onClickLogin: (data: IData) => Promise<void>;
  formState: FormState<IData>;
  onClickToBack: () => void;
}

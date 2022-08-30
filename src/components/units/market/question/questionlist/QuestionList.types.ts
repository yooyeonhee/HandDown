export interface IUser {
  name: string;
  email: string;
}
export interface IFetchUseditemQuestions {
  _id: string;
  user: IUser;
  contents: string;
  createdAt: Date;
}
export interface IFetchUserLoggedIn {
  email: string;
  name: string;
}
export interface IQuestionListUIProps {
  questionData: {
    fetchUseditemQuestions: Array<IFetchUseditemQuestions>;
  };
  loadFunc: any;
  loginData: IFetchUserLoggedIn;
}

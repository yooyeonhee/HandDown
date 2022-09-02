import { ApolloQueryResult } from "@apollo/client";

export interface IFetchUseditemQuestionAnswers {
  _id: string;
  contents: string;
  user: {
    name: string;
    email: string;
  };
  createdAt: Date;
}
export interface IUser {
  name: string;
  email: string;
}
export interface IAnswerListUIProps {
  answerData: {
    fetchUseditemQuestionAnswers: Array<IFetchUseditemQuestionAnswers>;
  };
  loginData: {
    fetchUserLoggedIn: IUser;
  };
  answerRefetch: (
    variables?:
      | Partial<{
          useditemQuestionId: string;
        }>
      | undefined
  ) => Promise<ApolloQueryResult<any>>;
}

export interface IAnswerListProps {
  addressId: string;
}

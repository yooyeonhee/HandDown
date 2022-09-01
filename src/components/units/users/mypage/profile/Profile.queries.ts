import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_COUNT_I_PICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;
export const FETCH_USED_ITEM_COUNT_I_SOLD = gql`
  query fetchUseditemsCountISold {
    fetchUseditemsCountISold
  }
`;
export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        amount
      }
    }
  }
`;

import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_I_SOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      price
      createdAt
      soldAt
    }
  }
`;

export const FETCH_USED_ITEM_COUNT_I_SOLD = gql`
  query fetchUseditemsCountISold {
    fetchUseditemsCountISold
  }
`;
export const FETCH_USED_ITEM_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      price
      createdAt
      seller {
        name
      }
      soldAt
    }
  }
`;

export const FETCH_USED_ITEM_COUNT_I_PICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;

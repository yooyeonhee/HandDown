import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($search: String, $page: Int, $isSoldout: Boolean) {
    fetchUseditems(search: $search, page: $page, isSoldout: $isSoldout) {
      _id
      name
      remarks
      contents
      price
      images
      createdAt
      pickedCount
      seller {
        name
      }
    }
  }
`;

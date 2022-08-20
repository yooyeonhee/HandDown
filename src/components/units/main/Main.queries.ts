import { gql } from "@apollo/client";

export const BEST_FETCH_USED_ITEMS = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
    }
  }
`;

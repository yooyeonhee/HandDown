import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import New from "../../../../src/components/units/market/new/New.container";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      pickedCount
      createdAt
      useditemAddress {
        address
        addressDetail
        lat
        lng
        zipcode
      }
      seller {
        name
      }
    }
  }
`;
export default function EditPage() {
  const router = useRouter();
  const { data: productData, loading } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });
  return loading ? <></> : <New isEdit={true} productData={productData} />;
}

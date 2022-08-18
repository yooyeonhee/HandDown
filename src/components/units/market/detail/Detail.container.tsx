import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import DetailUI from "./Detail.presenter";
import { FETCH_USED_ITEM, FETCH_USER_LOGGED_IN } from "./Detail.queries";

export default function Detail() {
  const router = useRouter();
  const { data: itemData } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
  return <DetailUI itemData={itemData} userData={userData} />;
}

import { useQuery } from "@apollo/client";
import MyPointUI from "./MyPoint.presenter";
import { FETCH_POINT_TRANSACTIONS } from "./MyPoint.queries";

export default function MyPoint() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS);

  console.log(data);
  return <MyPointUI />;
}

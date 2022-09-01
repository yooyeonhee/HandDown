import { useQuery } from "@apollo/client";
import MyPointUI from "./MyPoint.presenter";
import { FETCH_POINT_TRANSACTIONS } from "./MyPoint.queries";

export default function MyPoint() {
  const { data: pointData } = useQuery(FETCH_POINT_TRANSACTIONS);
  console.log(pointData);
  return <MyPointUI pointData={pointData} />;
}

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MainUI from "./Main.presenter";
import { BEST_FETCH_USED_ITEMS } from "./Main.queries";

export default function Main() {
  const router = useRouter();
  const { data: bestItem } = useQuery(BEST_FETCH_USED_ITEMS);
  return <MainUI bestItem={bestItem} />;
}

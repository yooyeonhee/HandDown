import { useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import MyPointUI from "./MyPoint.presenter";
import {
  FETCH_POINT_TRANSACTIONS,
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_OF_SELLING,
} from "./MyPoint.queries";

export default function MyPoint() {
  const [option, setOption] = useState("all");
  const [optionSelect, setOptionSelect] = useState([true, false, false, false]);
  const { data: pointData } = useQuery(FETCH_POINT_TRANSACTIONS);
  const { data: buyingData } = useQuery(FETCH_POINT_TRANSACTIONS_OF_BUYING);
  const { data: sellingData } = useQuery(FETCH_POINT_TRANSACTIONS_OF_SELLING);
  const { data: loadingData } = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING);
  const onClickOption = (event: MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget.id === "all") {
      setOptionSelect([true, false, false, false]);
    } else if (event.currentTarget.id === "buy") {
      setOptionSelect([false, true, false, false]);
    } else if (event.currentTarget.id === "sell") {
      setOptionSelect([false, false, true, false]);
    } else {
      setOptionSelect([false, false, false, true]);
    }
    setOption(event.currentTarget.id);
  };
  return (
    <MyPointUI
      pointData={pointData}
      buyingData={buyingData}
      sellingData={sellingData}
      loadingData={loadingData}
      optionSelect={optionSelect}
      onClickOption={onClickOption}
      option={option}
    />
  );
}

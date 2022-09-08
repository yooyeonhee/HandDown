import { useQuery } from "@apollo/client";
import { OmitProps } from "antd/lib/transfer/ListBody";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import MyProductUI from "./MyProduct.presenter";
import {
  FETCH_USED_ITEM_COUNT_I_PICKED,
  FETCH_USED_ITEM_COUNT_I_SOLD,
  FETCH_USED_ITEM_I_PICKED,
  FETCH_USED_ITEM_I_SOLD,
} from "./MyProduct.queries";

export default function MyProduct() {
  const router = useRouter();
  const [option, setOption] = useState("sold");
  const [optionSelect, setOptionSelect] = useState([true, false]);
  const [pageNum, setPageNum] = useState(1);
  const onClickOption = (event: MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget.id === "sold") {
      setOptionSelect([true, false]);
    } else {
      setOptionSelect([false, true]);
    }
    setOption(event.currentTarget.id);
  };
  const { data: ProductData, refetch: refetchProductData } = useQuery(
    FETCH_USED_ITEM_I_SOLD
  );
  const { data: ProductDataCount, refetch: refetchProductDataCount } = useQuery(
    FETCH_USED_ITEM_COUNT_I_SOLD
  );
  const { data: PickedData, refetch: refetchPickedData } = useQuery(
    FETCH_USED_ITEM_I_PICKED,
    {
      variables: { search: "" },
    }
  );
  const { data: PickedDataCount, refetch: refetchPickedDataCount } = useQuery(
    FETCH_USED_ITEM_COUNT_I_PICKED
  );
  const onClickTitleToDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/market/${event.currentTarget.id}`);
  };
  return (
    <MyProductUI
      ProductData={ProductData}
      refetchProductData={refetchProductData}
      ProductDataCount={ProductDataCount}
      onClickOption={onClickOption}
      option={option}
      PickedData={PickedData}
      PickedDataCount={PickedDataCount}
      refetchPickedData={refetchPickedData}
      onClickTitleToDetail={onClickTitleToDetail}
      optionSelect={optionSelect}
      setPageNum={setPageNum}
      pageNum={pageNum}
    />
  );
}

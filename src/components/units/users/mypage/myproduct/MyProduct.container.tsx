import { useQuery } from "@apollo/client";
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
  const onClickOption = (event: MouseEvent<HTMLDivElement>) => {
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
  console.log(PickedData);
  console.log(PickedDataCount);

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
    />
  );
}

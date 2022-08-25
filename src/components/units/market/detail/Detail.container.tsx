import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import DetailUI from "./Detail.presenter";
import {
  FETCH_USED_ITEM,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USED_ITEM_PICK,
} from "./Detail.queries";

export default function Detail() {
  const router = useRouter();
  const { data: itemData } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });
  console.log(itemData);
  const [toggleUsedItemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
  const [mainImg, setMainImg] = useState("");
  useEffect(() => {
    setMainImg(itemData?.fetchUseditem.images[0]);
  }, [itemData]);
  const onClickSubImage = (event: MouseEvent<HTMLImageElement>) => {
    setMainImg(event.currentTarget.id);
  };
  const onClickPick = () => {
    toggleUsedItemPick({
      variables: { useditemId: router.query.productId },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: {
            useditemId: router.query.productId,
          },
        },
      ],
    });
  };
  return (
    <DetailUI
      itemData={itemData}
      userData={userData}
      onClickPick={onClickPick}
      mainImg={mainImg}
      onClickSubImage={onClickSubImage}
    />
  );
}

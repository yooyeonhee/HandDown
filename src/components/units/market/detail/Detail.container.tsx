import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import DetailUI from "./Detail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  FETCH_USED_ITEM,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USED_ITEM_PICK,
} from "./Detail.queries";
import { DollarCircleOutlined } from "@ant-design/icons";

export default function Detail() {
  const router = useRouter();
  const { data: itemData } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productId },
  });
  const [toggleUsedItemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [buyAndSell] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
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

  const { confirm } = Modal;

  const showBuyConfirm = () => {
    confirm({
      title: `상품 구매를 위해 ${itemData.fetchUseditem.price}포인트가 차감됩니다.`,
      icon: <DollarCircleOutlined />,
      content: "구매하시겠습니까?",
      onOk() {
        onClickBuyAndSell();
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const successBuy = () => {
    Modal.success({
      content: "구매가 완료되었습니다.",
    });
  };
  const onClickBuyAndSell = async () => {
    try {
      const result = await buyAndSell({
        variables: { useritemId: itemData?.fetchUseditem._id },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: {
              useditemId: router.query.usedItemId,
            },
          },
        ],
      });
      successBuy();
      router.push(`/`);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DetailUI
      itemData={itemData}
      userData={userData}
      onClickPick={onClickPick}
      mainImg={mainImg}
      onClickSubImage={onClickSubImage}
      showBuyConfirm={showBuyConfirm}
    />
  );
}

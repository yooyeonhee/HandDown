import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      status
      impUid
      amount
    }
  }
`;
declare const window: typeof globalThis & {
  IMP: any;
};
export interface IFetchUserLoggedIn {
  name: string;
  email: string;
  userPoint: {
    amount: number;
  };
}
export interface IChargeModalProps {
  loginData: {
    fetchUserLoggedIn: IFetchUserLoggedIn;
  };
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
}
export const PointModal = styled.div`
  z-index: 2;
  background-color: white;
  width: 420px;
  height: auto;
  min-height: 200px;
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #88d6ec;
`;

export const CancelIcon = styled.img`
  width: 18px;
  height: 18px;
  position: absolute;
  right: 20px;
  top: 20px;
`;
export const SelectWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const PointSelect = styled.select`
  width: 80%;
  height: 60px;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  margin: 20px auto;
  font-size: 16px;
`;
export const PointButton = styled.button`
  border: none;
  width: 80%;
  height: 60px;
  border-radius: 10px;
  background-color: #88d6ec;
  color: white;
  font-weight: 500;
  font-size: 16px;
  margin: 30px auto;
`;
export const PointModalTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  width: 100%;
  margin-top: 50px;
  text-align: center;
`;
export default function ChargeModal(props: IChargeModalProps) {
  const router = useRouter();
  const [createPoint] = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING);
  const [price, setPrice] = useState("");
  const handleCancel = () => {
    props.setIsModalVisible(false);
  };
  const handleOk = () => {
    props.setIsModalVisible(false);
  };

  const onChangeValue = (event: ChangeEvent<HTMLSelectElement>) => {
    setPrice(event.target.value);
  };

  const submitBuy = async (data: any) => {
    try {
      const result = await createPoint({
        variables: {
          impUid: data.imp_uid,
        },
      });
      handleOk();
      router.push("/");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const requestPay = () => {
    props.setIsModalVisible(false);
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "포인트 결제",
        amount: price,
        buyer_email: props.loginData?.fetchUserLoggedIn.email,
        buyer_name: props.loginData?.fetchUserLoggedIn.name,
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
          submitBuy(rsp);
        } else {
          alert("결제에 실패했습니다. 다시 시도해주세요!");
        }
      }
    );
  };
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <PointModal>
        <CancelIcon src="/mypage/cancel.png" onClick={handleCancel} />
        <PointModalTitle>충전하실 금액을 선택해주세요!</PointModalTitle>
        <SelectWrapper>
          <PointSelect name="point" onChange={onChangeValue}>
            <option value="">충전금액</option>
            <option value="100">100원</option>
            <option value="500">500원</option>
            <option value="2000">2000원</option>
            <option value="5000">5000원</option>
          </PointSelect>
          <PointButton onClick={requestPay}>충전하기</PointButton>
        </SelectWrapper>
      </PointModal>
    </>
  );
}

import { EventHandler, MouseEvent, useState } from "react";
import NewUI from "./New.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATE_USED_ITEM } from "./New.queries";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { IData, IDaumPostcode } from "./New.types";
import { Modal } from "antd";

const schema = yup.object({
  name: yup.string().required("필수 입력 사항입니다."),
  remarks: yup.string().required("필수 입력 사항입니다."),
  contents: yup.string().required("필수 입력 사항입니다."),
  price: yup.number().required().min(0),
});

export default function New() {
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState<string[]>([]);
  const [checkTrade, setCheckTrade] = useState("meet");
  const [createUsedItem] = useMutation(CREATE_USED_ITEM);
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("000000");
  const [lat, setLat] = useState(3.0);
  const [lng, setLng] = useState(3.0);
  const [isAddressModalVisible, setIsAddressModalVisible] = useState(false);

  const { register, handleSubmit, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  function onChangeFiles(index: number, url: string) {
    const newFileUrls = [...fileUrls];
    if (newFileUrls[index]) {
      newFileUrls[index] = url;
    } else {
      newFileUrls.push(url);
    }
    setFileUrls([...newFileUrls]);
  }
  const onClickCheckTrade = (event: MouseEvent<HTMLInputElement>) => {
    setCheckTrade(event.currentTarget.value);
  };
  const addressShowModal = () => {
    setIsAddressModalVisible(true);
  };

  const addressHandleOk = () => {
    setIsAddressModalVisible(false);
  };

  const addressHandleCancel = () => {
    setIsAddressModalVisible(false);
  };

  const addressHandleComplete = (data: IDaumPostcode) => {
    setAddress(data.address);
    setPostCode(data.zonecode);
    setIsAddressModalVisible(false);
  };
  const onClickCancel = () => {
    router.push("/users/mypage");
  };
  const onClickSubmit = async (data: IData) => {
    try {
      const result = await createUsedItem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            useditemAddress: {
              address,
              addressDetail: data.addressDetail,
              lat,
              lng,
            },
            images: fileUrls,
          },
        },
      });
      Modal.success({
        content: "글 등록 성공",
        onOk() {
          router.push(`/market/${result.data.createUseditem._id}`);
        },
      });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <NewUI
      onChangeFiles={onChangeFiles}
      fileUrls={fileUrls}
      onClickCheckTrade={onClickCheckTrade}
      checkTrade={checkTrade}
      onClickCancel={onClickCancel}
      addressShowModal={addressShowModal}
      addressHandleCancel={addressHandleCancel}
      addressHandleOk={addressHandleOk}
      isAddressModalVisible={isAddressModalVisible}
      addressHandleComplete={addressHandleComplete}
      onClickSubmit={onClickSubmit}
      handleSubmit={handleSubmit}
      register={register}
      onChangeContents={onChangeContents}
      address={address}
      setLng={setLng}
      setLat={setLat}
      postCode={postCode}
    />
  );
}

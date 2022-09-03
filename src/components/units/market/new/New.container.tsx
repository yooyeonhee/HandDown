import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import NewUI from "./New.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./New.queries";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {
  IData,
  IDaumPostcode,
  INewProps,
  IUpdateUseditemInput,
} from "./New.types";
import { Modal } from "antd";

const schema = yup.object({
  name: yup.string().required("필수 입력 사항입니다."),
  remarks: yup.string().required("필수 입력 사항입니다."),
  contents: yup.string().required("필수 입력 사항입니다."),
  price: yup.number().required().min(0),
});

export default function New(props: INewProps) {
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState<string[]>([]);
  const [checkTrade, setCheckTrade] = useState("meet");
  const [createUsedItem] = useMutation(CREATE_USED_ITEM);
  const [updateUsedItem] = useMutation(UPDATE_USED_ITEM);
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [postCode, setPostCode] = useState("000000");
  const [isAddressModalVisible, setIsAddressModalVisible] = useState(false);

  const { register, handleSubmit, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };
  const onChangeDetailAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(event.currentTarget.value);
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
    if (event.currentTarget.value === "delivery") {
      setAddress("");
      setDetailAddress("");
      setPostCode("");
    }
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
    router.push("/");
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
              addressDetail: detailAddress,
              zipcode: postCode,
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
  const onClickUpdate = async (data: IData) => {
    const useditemAddress = {
      address,
      addressDetail: detailAddress,
      zipcode: postCode,
    };
    try {
      const result = await updateUsedItem({
        variables: {
          useditemId: router.query.productId,
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            images: fileUrls,
            useditemAddress,
          },
        },
      });
      // setResultRouteId(result.data.updateUseditemInput._id);
      router.push(`/market/${result.data.updateUseditem._id}`);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (props.productData?.fetchUseditem.images.length) {
      setFileUrls([...props.productData?.fetchUseditem.images]);
    }
    if (props.productData?.fetchUseditem.useditemAddress.zipcode) {
      setPostCode(props.productData?.fetchUseditem.useditemAddress.zipcode);
    }
    if (props.productData?.fetchUseditem.useditemAddress.address) {
      setAddress(props.productData?.fetchUseditem.useditemAddress.address);
    }
  }, [props.productData]);

  return (
    <NewUI
      isEdit={props.isEdit}
      productData={props.productData}
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
      postCode={postCode}
      onClickUpdate={onClickUpdate}
      onChangeDetailAddress={onChangeDetailAddress}
    />
  );
}

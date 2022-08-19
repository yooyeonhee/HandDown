import * as S from "./New.styles";
import UploadImage from "./UploadImage/UploadImage.container";
import { v4 as uuidv4 } from "uuid";
import { INewUIProps } from "./New.types";
import "react-quill/dist/quill.snow.css";
import FormInput from "../../../commons/inputs/forminput";
import LowLine from "../../../commons/lines/rowline";
import InputKakaoMap from "../../../commons/maps/inputmaps";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
export default function NewUI(props: INewUIProps) {
  return (
    <S.Body>
      <S.Wrapper>
        <S.Title>상품등록</S.Title>
        <S.ImageItemWrapper>
          {new Array(props.fileUrls.length + 1).fill(1).map((_, index) => (
            <UploadImage
              key={uuidv4()}
              index={index}
              onChangeFiles={props.onChangeFiles}
              fileUrls={props.fileUrls}
            />
          ))}
        </S.ImageItemWrapper>
        <S.FormWrapper onSubmit={props.handleSubmit(props.onClickSubmit)}>
          <FormInput label="제품명*" placeholder="상품명을 입력해주세요." />
          <FormInput
            label="상품요약*"
            placeholder="상품에 대한 정보를 간략하게 작성해주세요."
          />
          <S.InputLabel>상품설명*</S.InputLabel>
          <S.InputQuill
          // defaultValue={props.productData?.fetchUseditem.contents}
          // onChange={props.onChangeContents}
          />
          <FormInput
            label="판매가격*"
            placeholder="상품 가격을 작성해주세요."
          />
          <LowLine />
          <S.ChooseWrapper>
            <S.InputLabel style={{ width: "20vw" }}>거래방법*</S.InputLabel>
            <S.ChooseDiv>
              <S.ChooseOption
                type="radio"
                name="way"
                defaultChecked
                value="meet"
                onClick={props.onClickCheckTrade}
              />
              <S.ChooseLabel>만나서 거래</S.ChooseLabel>
              <S.ChooseOption
                type="radio"
                name="way"
                value="delivery"
                onClick={props.onClickCheckTrade}
              />
              <S.ChooseLabel>택배로 거래</S.ChooseLabel>
            </S.ChooseDiv>
          </S.ChooseWrapper>
          {props.checkTrade === "meet" ? (
            <>
              <S.InputLabel>거래위치</S.InputLabel>
              <S.AddressWrapper>
                <S.Map>
                  <InputKakaoMap
                    address={props.address}
                    setLng={props.setLng}
                    setLat={props.setLat}
                  />
                </S.Map>
                <S.AddressInputWrapper>
                  <S.PostCode>
                    {props.postCode}
                    <S.PostCodeBtn
                      type="button"
                      onClick={props.addressShowModal}
                    >
                      우편번호 검색
                    </S.PostCodeBtn>
                    {props.isAddressModalVisible && (
                      <Modal
                        title="주소검색"
                        visible={true}
                        onOk={props.addressHandleOk}
                        onCancel={props.addressHandleCancel}
                      >
                        <DaumPostcode
                          onComplete={props.addressHandleComplete}
                        />
                      </Modal>
                    )}
                  </S.PostCode>
                  <S.Input readOnly placeholder="주소" value={props.address} />
                  <S.Input placeholder="상세주소를 입력해주세요." />
                </S.AddressInputWrapper>
              </S.AddressWrapper>
            </>
          ) : (
            <></>
          )}
          <S.ButtonWrapper>
            <S.CancelBtn type="button" onClick={props.onClickCancel}>
              취소
            </S.CancelBtn>
            <S.SubmitBtn>등록</S.SubmitBtn>
          </S.ButtonWrapper>
        </S.FormWrapper>
      </S.Wrapper>
    </S.Body>
  );
}

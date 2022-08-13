import * as S from "./New.styles";
import UploadImage from "./UploadImage/UploadImage.container";
import { v4 as uuidv4 } from "uuid";
import { INewUIProps } from "./New.types";
import FormInput from "../../../commons/inputs/forminput";
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
        <S.FormWrapper>
          <FormInput label="제품명*" />
        </S.FormWrapper>
      </S.Wrapper>
    </S.Body>
  );
}

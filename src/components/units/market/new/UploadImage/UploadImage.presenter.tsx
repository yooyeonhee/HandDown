import * as S from "./UploadImage.styles";
import { IUploadsImageUIProps } from "./UploadImage.types";

export default function UploadsImageUI(props: IUploadsImageUIProps) {
  return (
    <>
      {props.fileUrl ? (
        <S.UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.UploadButton onClick={props.onClickUpload}>
          <S.Plus>+</S.Plus>
        </S.UploadButton>
      )}
      <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}

import { ChangeEvent, RefObject } from "react";

export interface IUploadsImageUIProps {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  showImgSelect: boolean;
}

export interface IUploadsImageProps {
  fileUrls: string[];
  index: number;
  onChangeFiles: (index: number, result: string) => void;
}

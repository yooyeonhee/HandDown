import { useState } from "react";
import NewUI from "./New.presenter";

export default function New() {
  const [fileUrls, setFileUrls] = useState<string[]>([]);

  function onChangeFiles(index: number, url: string) {
    const newFileUrls = [...fileUrls];
    if (newFileUrls[index]) {
      newFileUrls[index] = url;
    } else {
      newFileUrls.push(url);
    }
    setFileUrls([...newFileUrls]);
  }
  return <NewUI onChangeFiles={onChangeFiles} fileUrls={fileUrls} />;
}

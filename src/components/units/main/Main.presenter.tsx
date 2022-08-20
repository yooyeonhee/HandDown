import DecoBox from "../../commons/decoration/decobox";
import BestItem from "../../commons/itembox/bestitem";
import Banner from "../../commons/layout/banner/Banner.container";
import * as S from "./Main.styles";
import { v4 as uuidv4 } from "uuid";
import { IFetchUseditemsOfTheBest, IMainUIProps } from "./Main.types";
export default function MainUI(props: IMainUIProps) {
  console.log(props.bestItem);
  return (
    <S.Body>
      <S.ContentWrapper>
        <S.ContentImg src="./main/main.png" />
      </S.ContentWrapper>
      <S.AboutWrapper>
        <S.AboutTextWrapper>
          <S.LabelWrapper>
            <S.Label>About</S.Label>
            <DecoBox />
          </S.LabelWrapper>
          <S.Text>
            HandDown is an online market where you can trade used children's
            items <br /> such as clothes, shoes, strollers, and toys that you do
            not use.
          </S.Text>
        </S.AboutTextWrapper>
        <S.AboutImg src="/main/about.png" />
      </S.AboutWrapper>
      <S.BestItemWrapper>
        <S.LabelWrapper>
          <S.Label>Best Item</S.Label>
          <DecoBox />
        </S.LabelWrapper>
        <S.ItemsWrapper>
          {props.bestItem?.fetchUseditemsOfTheBest.map(
            (el: IFetchUseditemsOfTheBest) => (
              <BestItem key={uuidv4()} el={el} />
            )
          )}
        </S.ItemsWrapper>
      </S.BestItemWrapper>
    </S.Body>
  );
}

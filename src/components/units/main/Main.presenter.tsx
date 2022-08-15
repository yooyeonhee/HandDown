import DecoBox from "../../commons/decoration/decobox";
import BestItem from "../../commons/itembox/bestitem";
import Banner from "../../commons/layout/banner/Banner.container";
import * as S from "./Main.styles";
export default function MainUI() {
  return (
    <S.Body>
      <Banner />
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
          <BestItem />
          <BestItem />
          <BestItem />
          <BestItem />
        </S.ItemsWrapper>
      </S.BestItemWrapper>
    </S.Body>
  );
}

import DecoBox from "../../commons/decoration/decobox";
import BestItem from "../../commons/itembox/bestitem";
import Banner from "../../commons/layout/banner/Banner.container";
import * as S from "./Main.styles";
import { v4 as uuidv4 } from "uuid";
import { IFetchUseditemsOfTheBest, IMainUIProps } from "./Main.types";
export default function MainUI(props: IMainUIProps) {
  return (
    <S.Body>
      <S.ContentWrapper>
        <S.ContentImg src="./main/main.png" />
        <S.GoShop onClick={props.onClickToShop}>{"바로가기 >>"} </S.GoShop>
      </S.ContentWrapper>
      <S.AboutWrapper>
        <S.AboutTextWrapper>
          <S.LabelWrapper>
            <S.Label>About</S.Label>
            <DecoBox />
          </S.LabelWrapper>
          <S.Text>
            HandDown은 사용하지 않는 옷, 신발, 유모차, 장난감 등 <br /> 중고
            아동용품을 거래할 수 있는 온라인 마켓입니다.
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

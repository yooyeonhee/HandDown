import * as S from "./Banner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IBannerUIProps } from "./Banner.types";
export default function BannerUI(props: IBannerUIProps) {
  return (
    <S.Body>
      <S.BannerWrapper>
        <S.StyledSlider {...props.settings}>
          <div>
            <S.Img src="/banner/banner1.png" />
          </div>
          <div>
            <S.Img src="/banner/banner2.png" />
          </div>
          <div>
            <S.Img src="/banner/banner3.png" />
          </div>
        </S.StyledSlider>
      </S.BannerWrapper>
    </S.Body>
  );
}

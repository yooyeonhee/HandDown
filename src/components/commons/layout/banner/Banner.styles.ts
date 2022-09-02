import styled from "@emotion/styled";
import Slider from "react-slick";

export const Body = styled.div`
  width: 100%;
  height: 25vw;
`;
export const BannerWrapper = styled.div`
  width: 100%;
  height: 25vw;
`;
export const Img = styled.img`
  width: 100%;
  height: 25vw;
`;
export const StyledSlider = styled(Slider)`
  width: 100%;
  height: 25vw;

  .slick-slide div {
    height: 25vw;
    width: 100%;
  }

  .slick-dots {
    //슬라이드의 위치
    bottom: 20px;
    @media (max-width: 768px) {
      bottom: 5px;
    }
  }
  .slick-dots li button::before {
    font-size: 12px;
    color: #444444;
    opacity: 0.3;
  }
  .slick-dots li.slick-active button::before {
    color: gray;
    opacity: 1;
  }

  .slick-prev:before {
    font-size: 30px;
    position: absolute;
    right: -10px;
    color: #000000;
    display: none;
  }

  .slick-next:before {
    font-size: 30px;
    position: absolute;
    right: 50px;
    color: #ccc;
    display: none;
  }
`;

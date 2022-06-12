import styled from "@emotion/styled";
import Slider from "react-slick";

export const Body = styled.div`
    width: 100%;
    height: 400px;
`
export const Img = styled.img`
  margin: 0px auto;
  object-fit: cover;
`;

export const StyledSlider = styled(Slider)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  /* height: 90%; */

  .slick-list {  //슬라이드 스크린
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow-x: hidden;
  }

  .slick-track { //이건 잘 모르겠음
    width: 100px;
    height: 100%;
  }

  .slick-slide div {
    height: 400px;
    width: 100%;
  }

  .slick-dots {
    //슬라이드의 위치
    bottom: 20px;
  }
  .slick-dots li button::before {
    font-size: 12px;
    color: #fff;
    opacity: 0.3;
  }
  .slick-dots li.slick-active button::before {
    color: #fff;
    opacity: 1;
  }

  .slick-prev:before {
    font-size: 50px;
    position: absolute;
    left: -100px;
    color: #ccc;
    display: none;
  }

  .slick-next:before {
    font-size: 50px;
    position: absolute;
    right: 100px;
    color: #ccc;
    display: none;
  }
`
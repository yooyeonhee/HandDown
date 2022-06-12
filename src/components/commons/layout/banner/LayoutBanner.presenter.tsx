import * as S from "./LayoutBanner.styles"
export default function LayoutBannerUI(props){

    return(
        <S.Body>
            <S.StyledSlider {...props.settings}>
            <div>
                <S.Img src="/banner/banner01.jpg" />
            </div>
            <div>
                <S.Img src="/banner/banner01.jpg" />
            </div>
            <div>
                <S.Img src="/banner/banner01.jpg" />
            </div>
            <div>
                <S.Img src="/banner/banner01.jpg" />
            </div>
            </S.StyledSlider>
        </S.Body>
    )
}
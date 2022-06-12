import LayoutBannerUI from "./LayoutBanner.presenter";

export default function LayoutBanner(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };

    return(<LayoutBannerUI settings={settings}/>)
}
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import style from "./CarouselEffect.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imgLink, i) => {
          return <img key={i} src={imgLink} alt="" />;
        })}
      </Carousel>
      <div className={style.carouselFade}></div>
    </div>
  );
}

export default CarouselEffect;

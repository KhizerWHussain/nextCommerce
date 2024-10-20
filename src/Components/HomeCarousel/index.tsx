"use client";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import Image1 from "../../../assets/images/fashion-6109930_1280.jpg";
import Image2 from "../../../assets/images/woman-6540004_1280.jpg";
import Image3 from "../../../assets/images/woman-7633843_1280.jpg";
import Image4 from "../../../assets/images/woman-7646642_1280.jpg";
import Image from "next/image";

const images = [Image2, Image3, Image4];
const imageItems = images.map((image: any, i: number) => (
  <div className="relative w-screen h-screen cursor-pointer" key={i}>
    <Image
      src={image.src}
      alt={`Image ${i + 1}`}
      className="w-full overflow-hidden"
      height={image.height}
      width={image.width}
      quality={100}
      loading="eager"
      unoptimized={false}
      priority={true}
      blurDataURL={image.blurDataURL}
      suppressHydrationWarning={true}
      suppressContentEditableWarning={true}
      fetchPriority="high"
      draggable="false"
      role="presentation"
      objectFit="cover"
    />
  </div>
));

const HomeCarousel = () => (
  <AliceCarousel
    mouseTracking={true}
    items={imageItems}
    activeIndex={0}
    autoPlay={true}
    autoPlayControls={false}
    autoPlayDirection="rtl"
    name="Home Carousel"
    infinite={true}
    touchTracking={true}
    // animationDuration={5000}
    controlsStrategy="alternate"
    disableButtonsControls={true}
    disableSlideInfo={true}
    autoPlayInterval={1000}
  />
);

export default HomeCarousel;

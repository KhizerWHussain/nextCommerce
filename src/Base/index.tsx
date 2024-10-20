import HomeCarousel from "@/Components/HomeCarousel";
import HomeSection from "@/Components/HomeSectionCards";
import React from "react";

const Base = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <HomeCarousel />
      <HomeSection />
    </div>
  );
};

export default Base;

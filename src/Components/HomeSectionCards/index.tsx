"use client";
import React from "react";
import AliceCarousel, { Responsive } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeCard from "./SingleCard";
import { Button } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const responsiveScreenItems: Responsive = {
  0: { items: 1 },
  568: { items: 2 },
  720: { items: 3 },
  1024: { items: 6 },
};

const HomeSection = () => {
  const items = Array.from({ length: 5 }).map((_, i: number) => (
    <HomeCard key={i} />
  ));

  return (
    <div className="relative">
      <div className="relative">
        <Button
          className="z-50"
          variant="contained"
          sx={{
            position: "absolute",
            top: "8rem",
            left: 0,
            color: "white",
            transform: "",
          }}
          aria-label="prev"
        >
          <KeyboardArrowRight />
        </Button>
        <AliceCarousel
          mouseTracking={true}
          responsive={responsiveScreenItems}
          items={items}
          activeIndex={0}
          infinite={true}
          touchTracking={true}
          controlsStrategy="alternate"
          disableButtonsControls={true}
          disableSlideInfo={true}
        />
        <Button
          className="z-50"
          variant="contained"
          sx={{
            position: "absolute",
            top: "8rem",
            right: 0,
            color: "white",
            transform: "",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeft />
        </Button>
      </div>
    </div>
  );
};

export default HomeSection;

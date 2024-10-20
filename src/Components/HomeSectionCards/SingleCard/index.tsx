import Image from "next/image";
import React from "react";
import Image1 from "../../../../assets/images/woman-7633843_1280.jpg";

const HomeCard = () => {
  return (
    <div className="cursor-pointer mx-4 w-40 flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden justify-center">
      <div className="p-4 flex flex-col justify-center items-center gap-2 w-40">
        <div className="h-56 w-40">
          <Image
            src={Image1}
            alt="woman"
            className="object-cover object-top w-full h-full"
            objectFit="cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 text-start">
            Nofilter
          </h3>
          <p className="mt-2 text-sm text-gray-500 text-start">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
            similique?
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;

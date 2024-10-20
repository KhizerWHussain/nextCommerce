"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const MOBILEHEADER = dynamic(() => import("./Mobile"), { ssr: true });
const WEBHEADER = dynamic(() => import("./Web"), { ssr: true });

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="bg-white">
      <MOBILEHEADER setOpen={setOpen} open={open} />
      <WEBHEADER setOpen={setOpen} />
    </div>
  );
};

export default Header;

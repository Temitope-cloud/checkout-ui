import BreadCrumbs from "@/components/checkoutComponents/breadCrumbs";
import Checkout from "@/components/checkoutComponents/checkout";
import Navbar from "@/components/header/navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumbs />
      <Checkout />
    </div>
  );
};

export default page;

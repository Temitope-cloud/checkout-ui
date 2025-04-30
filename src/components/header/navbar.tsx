import Image from "next/image";
import React from "react";

interface NavBarPro {
  id: number;
  name: string;
}

const Navbar = () => {
  const topMenus: NavBarPro[] = [
    {
      id: 1,
      name: "Delivery",
    },
    {
      id: 2,
      name: "Trade-in",
    },
    {
      id: 3,
      name: "Pick Up",
    },
    {
      id: 4,
      name: "Stock",
    },
  ];

  const nextMenus = [
    "New Arrivals",
    "Best Sellers",
    "Hype",
    "Footwear",
    "Men",
    "Women",
    "Kids",
    "Brands",
    "Apparel",
    "Sale",
  ];

  return (
    <>
      <div className="">
        {/* Top menu */}
        <div className="flex mt-4 justify-between pb-5 border-b border-gray-900">
          <div className="hidden md:block">
            <label htmlFor="headerSearch">
              <i className="bx bx-search text-lg me-3"></i>
            </label>
            <input
              id="headerSearch"
              type="text"
              className="border-b border-gray-800 outline-none"
            />
          </div>

          {/* Top Menu and Logo */}
          <div className="flex justify-between w-[45%]">
            <ul className=" items-center gap-10 hidden md:flex">
              {topMenus.slice(0, 2).map((topMenu) => (
                <li key={topMenu.id} className="font-semibold">
                  {topMenu.name}
                </li>
              ))}
            </ul>
            {/* Logo */}
            <p className="text-2xl font-bold uppercase text-gray-800">
              Checkout
            </p>
            <ul className=" items-center gap-10 hidden md:flex">
              {topMenus.slice(2, 4).map((topMenu) => (
                <li key={topMenu.id} className="font-semibold">
                  {topMenu.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Last Menu */}
          <div className="flex items-center justify-start gap-4">
            <div className="hidden md:block">
              <i className="bx bx-cart text-2xl"></i>
              <i className="bx bx-signal-5 text-2xl"></i>
              <i className="bx bx-bell text-2xl"></i>
            </div>

            <div className="flex items-center  gap-2 font-semibold">
              <Image
                src="https://images.pexels.com/photos/31732259/pexels-photo-31732259/free-photo-of-smiling-man-in-denim-jacket-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="User Image"
                className="rounded-full object-cover w-10 h-10"
                width={500}
                height={500}
              />
              <p className="flex gap-2 items-center">
                John Doe{" "}
                <i className="bx bxs-down-arrow text-gray-600 text-sm"></i>{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Next menu */}
        <div className="overflow-x-auto relative">
          <ul className="flex w-full no-scrollbar overflow-scroll justify-between mt-2 font-semibold gap-x-6">
            {" "}
            {nextMenus.map((nextMenu, index) => (
              <li className="whitespace-nowrap" key={index}>
                {" "}
                {nextMenu}{" "}
              </li>
            ))}
          </ul>
          {/* Left fade */}
          <div className="absolute  top-0 left-0 h-full w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          {/* Right fade */}
          <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

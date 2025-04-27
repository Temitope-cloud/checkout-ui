import React from "react";

const BreadCrumbs = () => {
  const breadCrumb = [
    {
      name: "Shipping",
      completed: true,
    },
    {
      name: "Personal Details",
      completed: false,
    },
    {
      name: "Payment",
      completed: false,
    },
    {
      name: "Confirmation",
      completed: false,
    },
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <ul className="flex w-full overflow-scroll no-scrollbar items-center mt-5 border-y py-3 gap-10 bg-gray-50">
        {breadCrumb.map((b, index) => (
          <li key={index} className="flex items-center gap-2 font-semibold">
            {b.completed ? (
              <i className="bx bxs-check-circle text-green-700"></i>
            ) : (
              <p className="text-gray-500 border rounded-full p-2 py-1 text-xs">
                {index + 1}
              </p>
            )}{" "}
            <p className=" whitespace-nowrap text-gray-500">{b.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BreadCrumbs;

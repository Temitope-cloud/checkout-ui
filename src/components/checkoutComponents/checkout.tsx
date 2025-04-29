"use client";
// import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProgressBar from "@/lib/progressBar";

const Checkout = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("Nigeria");
  const [states, setStates] = useState([]);

  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries")
      .then((res) => {
        setCountries(res.data.data.map((c: { country: string }) => c.country));
        console.log(res.data.data.map((c: { country: string }) => c.country)); // Optional: for debugging
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      axios
        .post("https://countriesnow.space/api/v0.1/countries/states", {
          country: selectedCountry,
        })
        .then((res) => {
          setStates(res.data.data.states.map((s: { name: string }) => s.name));
        });
    }
  }, [selectedCountry]);
  return (
    <>
      <div>
        {/* Buy More */}
        <div className="border rounded-sm my-2 p-5">
          <p className="font-semibold">
            Add <span className="text-green-700 font-bold">N78,000.00</span> to
            cart and get free shipping
          </p>
          <ProgressBar />
        </div>

        <div className="grid md:grid-cols-[2fr_1fr] mt-5 md:mx-10  gap-2">
          <div className="bg-gray-50 min-h-screen p-4 rounded">
            <div className="flex items-center gap-2">
              <i className="bx bx-chevron-left border px-1 py-1 rounded-full"></i>
              <p className="font-medium">Back to cart</p>
            </div>

            <div className="px-5">
              <p className="font-bold text-2xl mt-5">Billing Details</p>
              <div className="mt-5">
                <p className="font-medium">First Name</p>
                <input
                  type="text"
                  className="border rounded w-full px-2 py-1 "
                  required
                  autoFocus
                  autoComplete="name"
                  name=""
                  id=""
                />
              </div>

              <div className="mt-5">
                <p className="font-medium">Last Name</p>
                <input
                  type="text"
                  className="border rounded w-full px-2 py-1"
                  required
                  name=""
                  id=""
                />
              </div>

              <div className="mt-5">
                <p className="font-medium">Company Name (Optional)</p>
                <input
                  type="text"
                  className="border rounded w-full px-2 py-1"
                  required
                  name=""
                  id=""
                />
              </div>

              {/* Address */}
              <div className="mt-5">
                <p className="font-medium">Address</p>
                <div className="flex items-center gap-2">
                  {/* Countries */}
                  <select
                    name=""
                    id=""
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="border rounded w-[70%] py-1 bg-green-50/30 ps-2 truncate"
                  >
                    {countries.map((c, i) => (
                      <option key={i} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  {/* States */}
                  <select
                    name=""
                    id=""
                    className="border rounded w-[70%] py-1 bg-green-50/30 ps-2 truncate"
                  >
                    {states.map((s, i) => (
                      <option key={i} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="House Number and Street Name"
                  className="w-full border py-1 px-2 mt-5 placeholder:font-medium"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Apartment, suite, unit, etc. (optional)"
                  className="w-full border py-1 px-2 mt-5 placeholder:font-medium"
                />
              </div>

              <div className="mt-5">
                <p className="font-medium">Town / City</p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full border py-1 px-2 placeholder:font-medium"
                />
              </div>

              <div className="mt-5">
                <p className="font-medium">Zip Code</p>
                <input
                  type="number"
                  name=""
                  id=""
                  className="w-full border py-1 px-2 placeholder:font-medium"
                />
              </div>

              <div className="mt-5">
                <p className="font-medium">Phone</p>
                <input
                  type="number"
                  name=""
                  id=""
                  className="w-full border py-1 px-2 placeholder:font-medium"
                />
              </div>

              <div className="mt-5">
                <p className="font-medium">Email address</p>
                <input
                  type="email"
                  name=""
                  id=""
                  className="w-full border py-1 px-2 placeholder:font-medium"
                />
              </div>

              <div className="mt-5 flex items-center gap-2">
                <input
                  type="checkbox"
                  name=""
                  id="createAccount"
                  className=" border py-1 px-2 placeholder:font-medium"
                />
                <label htmlFor="createAccount">
                  <p className="font-medium">Create an account?</p>
                </label>
              </div>
              <div className="mt-5 flex items-center gap-2">
                <input
                  type="checkbox"
                  name=""
                  id="differentAddress"
                  className=" border py-1 px-2 placeholder:font-medium"
                />
                <label htmlFor="differentAddress">
                  <p className="font-medium">Ship to a different address?</p>
                </label>
              </div>
            </div>
          </div>

          {/* Second grid */}
          <div className="sticky top-0 h-fit">
            <div className="border p-5 rounded ">
              <p className="text-xl font-semibold">Your Order</p>
              <div>
                <table className="table-auto w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-2">Product</th>
                      <th className="text-end pb-2">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-dashed border-b bg-green-50">
                      <td className="text-left px-2 text-sm py-3">
                        HP EliteBook Folio 9470m Notebook PC 14 ×{" "}
                        <span className="font-bold">1</span>
                      </td>
                      <td className="py-3 px-2 text-end text-sm font-semibold">
                        ₦250,000
                      </td>
                    </tr>
                    <tr className="border-dashed border-b bg-green-50">
                      <td className="text-left text-sm py-3 px-2 font-bold">
                        Subtotal
                      </td>
                      <td className="text-end py-3 px-2 text-sm ">₦250,000</td>
                    </tr>
                    <tr className=" border-b bg-green-50">
                      <td className="text-left text-sm py-3 px-2 font-bold">
                        Shipping
                      </td>
                      <td className="text-end py-3 px-2 text-sm ">₦1,750</td>
                    </tr>
                    <tr className=" border-b bg-green-50">
                      <td className="text-left text-sm py-3 px-2 font-bold">
                        Tax
                      </td>
                      <td className="text-end py-3 px-2 text-sm ">₦1,000</td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-between w-full py-5">
                  <p className="font-medium  text-green-600 underline underline-offset-1">
                    Have a discount code?
                  </p>
                  <p className=" font-semibold">₦252,750</p>
                </div>
              </div>
            </div>

            <div className="rounded border mt-10">
              {/* Refund policy */}
              <div className="flex p-3 items-center gap-2">
                <div className="bg-green-50 border px-5 py-5 rounded">
                  <i className="text-green-600 text-3xl bx bx-revision"></i>
                </div>
                <div>
                  <p className="font-semibold">Refund Policy guaranted</p>
                  <p>
                    We are committed to ensuring complete satisfaction with your
                    purchase.
                    <span className="inline-flex font-bold text-green-600 px-1 items-center">
                      Read Refund Policy{" "}
                      <i className="bx bx-right-arrow-alt"></i>
                    </span>
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="flex p-3 items-center gap-2">
                <div className="bg-green-50 border px-8 py-5 rounded">
                  <p className="text-green-600 text-3xl">!</p>{" "}
                </div>
                <div>
                  <p className="font-semibold">Privacy Policy</p>
                  <p className="w-[90%]">
                    Your personal data will be used to process your order,
                    throughout this website.
                    <span className="inline-flex font-bold text-green-600 px-1 items-center">
                      Read Privacy Policy
                      <i className="bx bx-right-arrow-alt"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

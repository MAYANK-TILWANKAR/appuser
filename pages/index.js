import React, { useState, useEffect } from "react";
import Image from "next/image";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const MobileView = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isValidNumber, setIsValidNumber] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  const handleMobileNumberChange = (e) => {
    const number = e.target.value;
    setMobileNumber(number);
    setIsValidNumber(number.length === 10 && /^\d+$/.test(number));
  };

  const handleCountryCodeChange = (e) => {
    setSelectedCountryCode(e.target.value);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleGetVerificationCode = () => {
    setShowOTP(true);
  };

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  const handleSkip = () => {
    setShowModal(true);
  };

  const services = [
    {
      name: "Women's Salon & Spa",
      icon: "/images/cleaning.webp",
    },
    {
      name: "Men's Salon & Massage",
      icon: "/images/cleaning.webp",
    },
    {
      name: "AC & Appliance Repair",
      icon: "/images/cleaning.webp",
    },
    {
      name: "Cleaning",
      icon: "/images/cleaning.webp",
    },
    {
      name: "Electrician, Plumber & Carpenter",
      icon: "/images/cleaning.webp",
    },
    {
      name: "Native Water Purifier",
      icon: "/images/cleaning.webp",
    },
  ];

  return (
    <div className="fixed flex overflow-y-hidden flex-col items-center justify-between w-full h-screen bg-gradient-to-b from-blue-100 to-blue-200 bg-cover bg-center py-40">
      {/* Top border with icons */}

      {/* Main content */}
      <div className="flex flex-col items-center w-full max-w-md">
        {/* Logo and Heading Section */}
        <div className="flex flex-col items-center mb-6 text-center">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-14 bg-black flex items-center justify-center rounded-lg">
              <span className="text-white text-xl font-bold">Logo</span>
            </div>
            <h2 className="text-2xl ">
              <span className="block font-bold">Company</span>
              <span className=" mr-10 block ">Name</span>
            </h2>
          </div>
          <p className="mt-4">
            <span className="text-sm font-semibold text-black">
              Your Home Service Expert
            </span>
            <br />
            <span className="text-[11px]   text-gray-500">
              Quick • Professional • Trusted
            </span>
          </p>
        </div>

        {/* Mobile Input Section */}
        <div className="w-80 mt-2">
          <div className="border border-gray-400 rounded-md flex items-center p-1.5 bg-white shadow-sm">
            <div className="relative inline-block border-r border-gray-400">
              <div
                className="appearance-none bg-transparent border-none pr-4 pl-2 py-1 cursor-pointer text-sm sm:text-base flex items-center "
                onClick={toggleDropdown}>
                <span>
                  {selectedCountryCode === "+91"
                    ? "🇮🇳"
                    : selectedCountryCode === "+1"
                    ? "🇺🇸"
                    : "🇬🇧"}
                </span>
                <span className="ml-1">{selectedCountryCode}</span>
                <svg
                  className={`fill-current h-4 w-4 ml-1 transition-transform duration-200 ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
              {isDropdownOpen && (
                <div className="absolute z-10 w-full bg-white border border-gray-800 rounded-md shadow-lg mt-1 transition-all duration-200 ease-in-out opacity-100 transform scale-100 origin-top">
                  <div className="py-0.5">
                    <div
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() =>
                        handleCountryCodeChange({ target: { value: "+91" } })
                      }>
                      🇮🇳 +91
                    </div>
                    <div
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() =>
                        handleCountryCodeChange({ target: { value: "+1" } })
                      }>
                      🇺🇸 +1
                    </div>
                    <div
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() =>
                        handleCountryCodeChange({ target: { value: "+44" } })
                      }>
                      🇬🇧 +44
                    </div>
                  </div>
                </div>
              )}
            </div>

            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="w-full p-2 bg-transparent border-none outline-none text-sm"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              maxLength={10}
            />
          </div>
          {!showOTP ? (
            <button
              className={`w-full font-bold py-3 mt-4 rounded-md transition-colors text-sm sm:text-base ${
                isValidNumber
                  ? "bg-black text-white cursor-pointer hover:bg-gray-800"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              disabled={!isValidNumber}
              onClick={handleGetVerificationCode}>
              Get Verification Code
            </button>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-full p-2 mt-4 bg-white border border-gray-400 rounded-md outline-none text-sm"
                value={otp}
                onChange={handleOTPChange}
                maxLength={6}
              />
              <button
                className="w-full font-bold py-3 mt-4 rounded-md transition-colors text-sm sm:text-base bg-black text-white cursor-pointer hover:bg-gray-800"
                onClick={() => {
                  /* Handle OTP confirmation */
                }}>
                Confirm OTP
              </button>
            </>
          )}
        </div>
      </div>

      {/* Bottom border with icons and Skip button */}
      <div className="mt-48 ml-72 border border-gray-900 px-4 py-1 rounded-md filter drop-shadow-md ">
        <button
          className="text-gray-900 text-xs hover:text-gray-600"
          onClick={handleSkip}>
          Skip
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-white overflow-y-auto h-full w-full flex flex-col items-center justify-start pt-4">
          <div className="w-full px-4 mb-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Location</h2>
              <button onClick={() => setShowModal(false)} className="text-2xl">
                &times;
              </button>
            </div>
            <p className="text-sm text-gray-500">Your Location</p>
          </div>
          <div className="w-full px-4 mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for 'Your Service'"
                className="w-full p-3 bg-gray-100 rounded-lg pl-10"
              />
              <svg
                className="w-5 h-5 absolute left-3 top-3.5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 px-4 w-full">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-gray-100 rounded-lg p-4 w-20 h-20 flex items-center justify-center">
                  <Image
                    src={service.icon}
                    width={40}
                    height={40}
                    alt={service.name}
                  />
                </div>
                <p className="text-center text-sm mt-2">{service.name}</p>
              </div>
            ))}
          </div>
          <div className="w-full px-4 mt-6">
            <div className="swiper-container w-full">
              <div className="swiper-wrapper">
                <div className="swiper-slide w-full">
                  <div className="bg-black text-white rounded-lg py-10">
                    <h3 className="text-base sm:text-lg font-semibold mb-2">
                      Demo card 1
                    </h3>
                    <p className="text-sm sm:text-base">
                      Some content for demo card 1
                    </p>
                  </div>
                </div>
                <div className="swiper-slide w-full">
                  <div className="bg-black text-white rounded-lg py-10">
                    <h3 className="text-base sm:text-lg font-semibold mb-2">
                      Demo card 2
                    </h3>
                    <p className="text-sm sm:text-base">
                      Some content for demo card 2
                    </p>
                  </div>
                </div>
                <div className="swiper-slide w-full">
                  <div className="bg-black text-white rounded-lg py-10">
                    <h3 className="text-base sm:text-lg font-semibold mb-2">
                      Demo card 3
                    </h3>
                    <p className="text-sm sm:text-base">
                      Some content for demo card 3
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
            <button className="flex flex-col items-center">
              <span>Company </span>
              <span className="text-xs">Name</span>
            </button>
            <button className="flex flex-col items-center">
              <span>📋</span>
              <span className="text-xs">Option1</span>
            </button>
            <button className="flex flex-col items-center">
              <span>🎁</span>
              <span className="text-xs">Option2</span>
            </button>
            <button className="flex flex-col items-center">
              <span>🏠</span>
              <span className="text-xs">Option3</span>
            </button>
            <button className="flex flex-col items-center">
              <span>👤</span>
              <span className="text-xs">Account</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileView;

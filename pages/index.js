import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
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
  const [showSubModal, setShowSubModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [showFullScreenModal, setShowFullScreenModal] = useState(false);
  const [selectedSubService, setSelectedSubService] = useState("");

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
      icon: "/images/women.webp",
    },
    {
      name: "Men's Salon & Massage",
      icon: "/images/men.webp",
    },
    {
      name: "AC & Appliance Repair",
      icon: "/images/ac.webp",
    },
    {
      name: "Cleaning",
      icon: "/images/cleaning.webp",
    },
    {
      name: "Electrician, Plumber & Carpenter",
      icon: "/images/electric.webp",
    },
    {
      name: "Native Water Purifier",
      icon: "/images/ro.webp",
    },
  ];

  return (
    <div className="fixed flex overflow-x-auto flex-col items-center justify-between w-full h-screen bg-gradient-to-b from-blue-100 to-blue-200 bg-cover bg-center py-40">
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
        <div className="fixed inset-0 bg-white overflow-x-auto h-full max-w-md flex flex-col items-center justify-start pt-4">
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
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => {
                  setShowSubModal(true);
                  setSelectedService(service.name);
                }}>
                <div className="bg-gray-100 rounded-lg w-20 h-16 flex items-center justify-center">
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
          {showSubModal && (
            <div className="fixed inset-x-0 bottom-0 bg-white rounded-t-3xl  shadow-lg transition-transform duration-300 transform translate-y-0 z-50">
              <div className="py-8 px-4  border-t border-gray-200 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Women&apos;s Salon & Spa
                  </h3>
                  <button
                    onClick={() => setShowSubModal(false)}
                    className="text-3xl absolute top-2 right-4">
                    &times;
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      name: "Salon for Women",
                      icon: "/images/women.webp",
                    },
                    { name: "Spa for Women", icon: "/images/women.webp" },
                    {
                      name: "Hair Studio for Women",
                      icon: "/images/women.webp",
                    },
                  ].map((subService, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center cursor-pointer"
                      onClick={() => {
                        setShowFullScreenModal(true);
                        setSelectedSubService(subService.name);
                      }}>
                      <div className="bg-gray-100 rounded-lg w-20 h-16 flex items-center justify-center mb-2">
                        <Image
                          src={subService.icon}
                          width={40}
                          height={40}
                          alt={subService.name}
                        />
                      </div>
                      <p className="text-center text-sm">{subService.name}</p>
                    </div>
                  ))}
                </div>
                {showFullScreenModal && (
                  <div className="pt-36 inset-0 bg-white z-50 flex flex-col h-screen w-full overflow-y-auto">
                    <div className="flex flex-col items-start justify-start py-4 px-4">
                      <div className="flex items-center w-full mb-4 top-0 bg-white z-10">
                        <button
                          onClick={() => setShowFullScreenModal(false)}
                          className="mr-2 text-2xl text-black">
                          &lt;
                        </button>
                        <div className="relative flex-grow">
                          <input
                            type="text"
                            placeholder="Search..."
                            className="w-full py-2 pl-10 pr-16 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                          />
                          <svg
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                          </svg>
                          <button
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            aria-label="Voice search">
                            <svg
                              className="w-4 h-4 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                            </svg>
                          </button>
                        </div>
                        <button className="ml-2" aria-label="Share">
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="w-full flex-grow">
                        <Swiper
                          spaceBetween={10}
                          slidesPerView={1}
                          pagination={{ clickable: true }}
                          className="mySwiper mb-4">
                          <SwiperSlide>
                            <div className="bg-purple-700 text-white p-4 rounded-lg">
                              <h3 className="text-lg font-semibold mb-2">
                                Banner 1
                              </h3>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="bg-blue-600 text-white p-4 rounded-lg">
                              <h3 className="text-lg font-semibold mb-2">
                                Banner 2
                              </h3>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="bg-green-500 text-white p-4 rounded-lg">
                              <h3 className="text-lg font-semibold mb-2">
                                Banner 3
                              </h3>
                            </div>
                          </SwiperSlide>
                        </Swiper>

                        <div className="flex justify-between mb-4  top-16  z-10 py-2">
                          <button className="px-3 py-1 border rounded-md bg-gray-100 text-sm">
                            <span className="flex items-center font-semibold">
                              Sort by
                              <svg
                                className="w-3 h-3 ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"></path>
                              </svg>
                            </span>
                          </button>
                          <button className="px-3 py-1 border rounded-md bg-gray-100 text-sm">
                            <span className="flex items-center font-semibold">
                              Type
                              <svg
                                className="w-3 h-3 ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"></path>
                              </svg>
                            </span>
                          </button>
                          <button className="px-3 py-1 border rounded-md bg-gray-100 text-sm font-semibold">
                            Open Now
                          </button>
                        </div>

                        <div className="space-y-6 pb-20 ">
                          {[1, 2, 3].map((index) => (
                            <div
                              key={index}
                              className="border-b border-gray-200 shadow-sm rounded-lg overflow-hidden">
                              <Swiper
                                spaceBetween={20}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                className="rounded-lg">
                                <SwiperSlide>
                                  <img
                                    src="/images/beauty.jpg"
                                    alt={`Beauty salon ${index}`}
                                    className="w-full h-48 object-cover"
                                  />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img
                                    src="/images/beauty.jpg"
                                    alt={`Interior ${index}`}
                                    className="w-full h-48 object-cover"
                                  />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img
                                    src="/images/beauty.jpg"
                                    alt={`Beauty ${index}`}
                                    className="w-full h-48 object-cover"
                                  />
                                </SwiperSlide>
                              </Swiper>
                              <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="text-lg font-semibold">
                                    Beauty Salon {index}
                                  </h4>
                                  <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                                    {4 + index / 10} ★
                                  </span>
                                </div>
                                <div className="flex items-center text-sm mb-2">
                                  <span className="mr-2">
                                    {10 + index} Ratings
                                  </span>
                                  <span>•</span>
                                  <span className="ml-2">
                                    {5 + index} Years in Business
                                  </span>
                                </div>
                                <p className="text-gray-600 text-sm mb-2">
                                  {`Location ${index}, City`}
                                </p>
                                <p className="text-green-600 text-sm mb-2">
                                  Open until {7 + index}:00 PM
                                </p>
                                <p className="text-gray-600 text-sm mb-2">
                                  {5 + index} Recent Enquiries
                                </p>
                                <p className="text-green-600 text-sm mb-3">
                                  ✓{" "}
                                  {
                                    ["Haircut", "Coloring", "Styling"][
                                      index - 1
                                    ]
                                  }{" "}
                                  Specialist
                                </p>
                                <div className="flex space-x-2">
                                  <button className="bg-blue-500 text-white px-3  rounded text-sm flex-1 hover:bg-blue-600 transition-colors ">
                                    Call Now
                                  </button>
                                  <button className="border border-gray-300 px-3 py-1 rounded text-sm flex-1 hover:bg-gray-100 transition-colors">
                                    Send Enquiry
                                  </button>
                                  <button className="bg-green-500 text-white px-3 py-1 rounded text-sm flex-1 hover:bg-green-600 transition-colors">
                                    WhatsApp
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="w-full px-4 mt-3 overflow-x-auto ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="w-full">
              <SwiperSlide>
                <div className="bg-black text-white rounded-lg py-16 px-10">
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    Demo card 1
                  </h3>
                  <p className="text-sm sm:text-base">
                    Some content for demo card 1
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-black text-white rounded-lg py-16 px-10">
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    Demo card 2
                  </h3>
                  <p className="text-sm sm:text-base">
                    Some content for demo card 2
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-black text-white rounded-lg py-16 px-10">
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    Demo card 3
                  </h3>
                  <p className="text-sm sm:text-base">
                    Some content for demo card 3
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
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

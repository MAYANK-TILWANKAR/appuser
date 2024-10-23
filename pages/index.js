import React, { useState } from "react";

const MobileView = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isValidNumber, setIsValidNumber] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  return (
    <div className=" fixed flex overflow-y-hidden flex-col items-center justify-between min-h-screen bg-[url('/images/bg.png')] bg-cover bg-center py-36 px-4 sm:py-12 sm:px-6 md:py-16 md:px-8 lg:py-20 lg:px-10 ">
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
              className="w-full p-2 bg-transparent border-none outline-none text-sm  border-2 border-gray-300"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              maxLength={10}
            />
          </div>
          <button
            className={`w-full font-bold py-3 mt-4 rounded-md transition-colors text-sm sm:text-base ${
              isValidNumber
                ? "bg-black text-white cursor-pointer hover:bg-gray-800"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
            disabled={!isValidNumber}>
            Get Verification Code
          </button>
        </div>
      </div>

      {/* Bottom border with icons and Skip button */}
      <div className="mt-36 ml-72 border border-gray-900 px-4 py-1 rounded-md filter drop-shadow-md ">
        <button className="text-gray-900 text-xs hover:text-gray-600">
          Skip
        </button>
      </div>
    </div>
  );
};

export default MobileView;

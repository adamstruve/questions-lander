import React from "react";

function StepZip(props) {
  function validateZip() {
    let zip = document.getElementById("zip").value;
    props.setZipState(zip);
    props.nextStep();
  }

  return (
    <div>
      <div className="bg-gray-600	px-2 md:px-4 py-2 md:py-4">
        <div className="flex flex-row">
          <div className="w-2/12 md:w-3/12 m-auto">
            <div className="w-10 h-10 mx-auto bg-green-500 rounded-full text-lg text-white flex items-center px-2">
              18+
            </div>
          </div>
          <div className="w-10/12 md:w-9/12">
            <span className="text-amber-400 font-bold antialiased	">
              Your Game Settings Saved
            </span>
            <br />
            Now Create Your Free Account
          </div>
        </div>
      </div>

      <div className="py-4 px-8 mt-3 text-black">
        <p className="mb-6">
          Help us find the game server closest to you by entering your location.
          This prevents lag and gives you a better experience.
        </p>
        <p className="mb-6">Enter your zip or postal code to connect.</p>

        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-slate-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-6"
          id="zip"
          type="text"
          placeholder="Enter Zip or Postal Code"
        />

        <button
          type="button"
          className="w-full px-4 py-2 font-semibold text-lg bg-green-500 text-white rounded-none shadow-sm mb-6"
          onClick={() => validateZip()}
        >
          Connect
        </button>
      </div>
    </div>
  );
}

export default StepZip;

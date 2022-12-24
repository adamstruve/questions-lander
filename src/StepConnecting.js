import React from "react";

function StepConnecting(props) {
  let x = 0;
  let next;
  let interval = setInterval(function () {
    next = x + 1;
    if (x === 0) {
      document.getElementById("connecting").classList.remove("w-0");
    } else {
      if (x < 4) {
        document.getElementById("connecting").classList.remove("w-" + x + "/4");
        document.getElementById("connecting").classList.add("w-" + next + "/4");
      }
    }

    if (x === 1) {
      document.getElementById("connect-status").textContent =
        "Searching For Nearest Server...";
    }

    if (x === 2) {
      document.getElementById("connect-status").textContent =
        "Found US-CLOUD #18...";
    }
    x++;

    if (x === 4) {
      document.getElementById("connect-status").textContent = "Connected...";
      document.getElementById("connecting").classList.remove("w-3/4");
      document.getElementById("connecting").classList.add("w-full");
    }

    if (x === 5) {
      clearInterval(interval);
      console.log("how many times does this run?");
      props.nextStep();
      props.setProgressState("85%");
      props.setStepLine1(50);
      x = 6;
    }
  }, 1400);

  return (
    <div>
      <div className="bg-gray-600 px-2 md:px-4 py-2 md:py-4">
        <div className="flex flex-row">
          <div className="w-2/12 md:w-3/12 m-auto">
            <div className="w-10 h-10 mx-auto bg-green-500 rounded-full text-lg text-white flex items-center px-2">
              18+
            </div>
          </div>
          <div className="w-10/12 md:w-9/12">
            <span className="text-amber-400 font-bold antialiased	">
              Now Connecting
            </span>
            <br />
            One moment...
          </div>
        </div>
      </div>

      <div className="py-4 px-8 mt-3">
        <div className="flex">
          <div className="m-auto">
            <div className="p-3 shadow-lg rounded-lg">
              <div className="w-80 h-auto bg-gray-600 p-3 rounded-full">
                <div
                  id="connecting"
                  className="inline-block w-0 h-auto bg-gradient-to-r from-green-500 via-green-500 from-green-500 rounded-full p-2 transition-all"
                ></div>
              </div>
              <div
                id="connect-status"
                className="text-lg text-center text-black font-bold"
              >
                Initializing...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepConnecting;

import React from "react";
import Countdown, { zeroPad } from "react-countdown";

function StepUser(props) {
  function validateUser() {
    props.nextStep();
  }

  // Change the Steps Bar Status
  let confirmStep = document.getElementById("confirm-step");
  confirmStep.classList.remove("bg-white");
  confirmStep.classList.add("bg-green-500");
  confirmStep.classList.remove("border-2");
  confirmStep.classList.remove("border-gray-200");

  document
    .getElementById("confirm-step-icon")
    .classList.remove("text-gray-600");
  document.getElementById("confirm-step-icon").classList.add("text-white");

  //props.setStepLine2(50);

  function generate() {
    const word1 = [
      "Soup",
      "Meal",
      "Math",
      "Town",
      "Bath",
      "Girl",
      "Desk",
      "Idea",
      "Poem",
      "Dirt",
    ];
    const word2 = [
      "Vote",
      "Tell",
      "Feed",
      "Bear",
      "Ship",
      "Fear",
      "Roll",
      "Risk",
      "Line",
      "Turn",
    ];
    const word3 = ["11", "22", "33", "44", "55", "66", "77", "88", "99", "69"];
    let generatedPass =
      word1[Math.floor(Math.random() * word1.length)] +
      word2[Math.floor(Math.random() * word2.length)] +
      word3[Math.floor(Math.random() * word3.length)];
    document.getElementById("password").value = generatedPass;
  }

  // Renderer callback with condition
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>Hurry!</span>;
    } else {
      // Render a countdown
      return (
        <span>
          {zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      );
    }
  };

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
              Final Step
            </span>
            <br />
            Create Your Username &amp; Password
          </div>
        </div>
      </div>

      <div className="py-4 px-8 mt-3 text-black">
        <p className="mb-1">
          Please choose your in game username and password.
        </p>
        <p className="mb-4 text-sm">
          Your free registration expires in:{" "}
          <Countdown
            date={Date.now() + 100000}
            zeroPadTime={2}
            renderer={renderer}
          />
        </p>

        <p className="mb-1 text-xs">Username: (Other players will see this) </p>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-slate-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-6"
          id="user"
          type="text"
          placeholder="Enter your in game username"
        />

        <p className="mb-1 text-xs">Password: </p>
        <div className="relative">
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-slate-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-6"
            id="password"
            type="text"
            placeholder="6 character minimum"
          />
          <div
            id="generate"
            className="absolute top-3 right-3 text-green-500 font-bold uppercase cursor-pointer"
            onClick={() => generate()}
          >
            Generate
          </div>
        </div>

        <button
          type="button"
          className="w-full px-4 py-2 font-semibold text-lg bg-green-500 text-white rounded-none shadow-sm mb-6"
          onClick={() => validateUser()}
        >
          Create My Account
        </button>
      </div>
    </div>
  );
}

export default StepUser;

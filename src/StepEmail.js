import React from "react";

let emailCount = 0;
function StepEmail(props) {
  function validateEmail() {
    document.getElementById("email-fail").style.display = "none";
    document.getElementById("validateEmail").classList.add("active");
    let emailRegex =
      /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let email = document.getElementById("email").value;
    emailCount++;
    if (emailRegex.test(email) || emailCount === 3) {
      // This is where we would send the email to the server.
      props.setEmailState(email);
      props.nextStep();
    } else {
      document.getElementById("validateEmail").classList.remove("active");
      document.getElementById("email-fail").style.display = "block";
    }
  }

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
              Now Connected!
            </span>
            <br />
            Connection Quality: GREAT
          </div>
        </div>
      </div>

      <div className="py-4 px-8 mt-3 text-black">
        <p className="mb-6">
          Awesome! Now we just need your email address to create your new
          account.
        </p>
        <p className="mb-6">Your email must be valid to login.</p>

        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-slate-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-6"
          id="email"
          type="text"
          placeholder="Enter Your Email Address"
        />

        <p id="email-fail" className="error hidden">
          Please enter a valid email address and try again.
        </p>

        <button
          type="button"
          id="validateEmail"
          className="w-full px-4 py-2 font-semibold text-lg bg-green-500 text-white rounded-none shadow-sm mb-6"
          onClick={() => validateEmail()}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default StepEmail;

import { useState } from "react";
import "./App.css";
import StepZip from "./StepZip";
import StepConnecting from "./StepConnecting";
import StepEmail from "./StepEmail";
import StepUser from "./StepUser";

function App() {
  const [step, setStep] = useState(0);
  const [stepLine1, setStepLine1] = useState(0);
  const [stepLine2, setStepLine2] = useState(0);
  const nextStep = () => {
    setStep(step + 1);
    console.log("Step: " + step);
  };

  const [progress, setProgress] = useState("75%");
  const setProgressState = (progress) => {
    setProgress(progress);
  };

  const [zip, setZip] = useState("");
  const setZipState = (zip) => {
    setZip(zip);
  };

  const [email, setEmail] = useState("");
  const setEmailState = (email) => {
    setEmail(email);
  };

  let videoPoster = "";
  let vidURL = "media/bg.mp4";

  const Step = (props) => {
    switch (props.step) {
      case 0:
        return <StepZip nextStep={nextStep} setZipState={setZipState} />;
      case 1:
        return (
          <StepConnecting
            nextStep={nextStep}
            setProgressState={setProgressState}
            setStepLine1={setStepLine1}
          />
        );
      case 2:
        return <StepEmail nextStep={nextStep} setEmailState={setEmailState} />;
      case 3:
        return (
          <StepUser
            nextStep={nextStep}
            setStepLine2={setStepLine2}
            setProgressState={setProgressState}
          />
        );
      default:
        return <StepZip nextStep={nextStep} />;
    }
  };

  return (
    <div>
      <div className="h-screen w-full flex flex-col md:justify-center items-center">
        <div className="max-w-lg mx-3">
          <div className="w-full py-6">
            <div className="flex">
              <div className="w-1/3">
                <div className="relative mb-2">
                  <div className="w-10 h-10 mx-auto bg-green-500 rounded-full text-lg text-white flex items-center">
                    <span className="text-center text-white w-full">
                      <svg
                        className="w-full fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          className="heroicon-ui"
                          d="M19 10h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v2zM9 12A5 5 0 1 1 9 2a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5v2z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="text-xs text-center md:text-base text-white">
                  Free Account
                </div>
              </div>

              <div className="w-1/3">
                <div className="relative mb-2">
                  <div
                    className="absolute flex align-center items-center align-middle content-center"
                    style={{
                      width: "calc(100% - 2.5rem - 1rem)",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1 text-white">
                      <div
                        id="step-line-1"
                        className="w-0 bg-green-300 py-1 rounded"
                        style={{ width: stepLine1 + "%" }}
                      ></div>
                    </div>
                  </div>

                  <div
                    id="confirm-step"
                    className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center"
                  >
                    <span
                      id="confirm-step-icon"
                      className="text-center text-gray-600 w-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className=""
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="text-xs text-center md:text-base text-white">
                  Confirmation
                </div>
              </div>

              <div className="w-1/3">
                <div className="relative mb-2">
                  <div
                    className="absolute flex align-center items-center align-middle content-center"
                    style={{
                      width: "calc(100% - 2.5rem - 1rem)",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                      <div
                        id="step-line-2"
                        className="w-0 bg-green-300 py-1 rounded"
                        style={{ width: stepLine2 + "%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                    <span className="text-center text-gray-600 w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className=""
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="text-xs text-center md:text-base text-white">
                  Start Playing
                </div>
              </div>
            </div>
          </div>

          <div className="w-4/5	 bg-slate-100 rounded items-center align-center flex-1 mx-auto mb-3">
            <div
              id="progress"
              className="w-0 bg-green-500 rounded text-center text-xs text-white transition-all"
              style={{ width: progress }}
            >
              {progress}
            </div>
          </div>

          <div className="max-w-lg bg-slate-100 bg-opacity-80 shadow-2xl rounded-lg overflow-hidden mx-3 text-white">
            <Step step={step} />
          </div>
        </div>
      </div>

      <div className="video-bg">
        <video
          id="vid"
          autoPlay={true}
          loop={true}
          muted="muted"
          playsInline={true}
          poster={videoPoster}
        >
          <source src={vidURL} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;

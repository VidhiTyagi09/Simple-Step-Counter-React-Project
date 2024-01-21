import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  function clickCancel() {
    setIsOpen((currentOpenStatus) => !currentOpenStatus);
  }
  return (
    <>
      {isOpen ? (
        <button className="close" onClick={clickCancel}>
          &times;
        </button>
      ) : (
        <button className="enter" onClick={clickCancel}>
          &laquo; Enter the World of Step Counter &raquo;
        </button>
      )}
      {isOpen && (
        <div>
          <StepCounter />
          <Steps />
        </div>
      )}
    </>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function HandleNext() {
    if (step !== 3) setStep((prevStep) => prevStep + 1);
  }

  function HandlePrevious() {
    if (step !== 1) setStep((prevStep) => prevStep - 1);
  }

  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
        <p className="message">
          Step {step}: {messages[step - 1]}
        </p>
        <div className="buttons">
          <button
            style={{
              backgroundColor: step !== 1 ? "#7950f2" : "#e7e7e7",
              color: step !== 1 ? "#fff" : "black",
            }}
            onClick={HandlePrevious}
          >
            Previous
          </button>
          <button
            style={{
              backgroundColor: step !== 3 ? "#7950f2" : "#e7e7e7",
              color: step !== 3 ? "#fff" : "black",
            }}
            onClick={HandleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

function StepCounter() {
  const [stepCounter, setStepCounter] = useState(1);
  const [count, setCount] = useState(0);
  const today = new Date();
  const msg = `Today is ${today.toDateString()}`;
  const [displayMsg, setDisplayMsg] = useState(msg);

  function AddStep() {
    if (stepCounter === -1) {
      alert("Step cannot be 0");
      setStepCounter((prevStep) => prevStep + 2);
    } else {
      setStepCounter((prevStep) => prevStep + 1);
    }
  }

  function SubtractStep() {
    if (stepCounter === 1) {
      alert("Step cannot be 0");
      setStepCounter((prevStep) => prevStep - 2);
    } else {
      setStepCounter((prevStep) => prevStep - 1);
    }
  }

  function AddCountEvent() {
    setCount((prevCount) => {
      ModifyMessage(prevCount + stepCounter);
      return prevCount + stepCounter;
    });
  }

  function SubtractCountEvent() {
    setCount((prevCount) => {
      ModifyMessage(prevCount - stepCounter);
      return prevCount - stepCounter;
    });
  }

  function ModifyMessage(newCount) {
    let newDate = new Date();
    newDate.setDate(today.getDate() + newCount);

    let newMsg;

    if (newCount > 0) {
      newMsg = `${newCount}  ${
        newCount === 1 ? `day` : `days`
      } from today is ${newDate.toDateString()}`;
      setDisplayMsg(newMsg);
    } else if (newCount < 0) {
      newMsg = `${newCount * -1} ${
        newCount * -1 === 1 ? `day` : `days`
      } ago was ${newDate.toDateString()}`;
      setDisplayMsg(newMsg);
    } else {
      newMsg = `Today is ${newDate.toDateString()}`;
      setDisplayMsg(newMsg);
    }
  }

  return (
    <div className="stepCounter">
      <div>
        <button onClick={SubtractStep}> - </button>
        <span> Step: {stepCounter} </span>
        <button onClick={AddStep}> + </button>
      </div>
      <div>
        <button onClick={SubtractCountEvent}> - </button>
        <span> Count: {count} </span>
        <button onClick={AddCountEvent}> + </button>
      </div>
      <div>
        <p>{displayMsg}</p>
      </div>
    </div>
  );
}

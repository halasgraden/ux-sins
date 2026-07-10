import { useJourney } from "../../context/JourneyProvider.jsx";
import { ArrowLeft } from "lucide-react";
import React from "react";

export default function Cancel() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [secondsLeft, setSecondsLeft] = React.useState(30);

  const { advance, goBack } = useJourney();

  // renewal date
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 7);
  const renewalDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const buttonRef = React.useRef(null);
  const minButtonSizeRef = React.useRef(200);
  const currentStepRef = React.useRef(currentStep);
  const [buttonPos, setButtonPos] = React.useState({ x: 0, y: 0 });
  const [buttonSize, setButtonSize] = React.useState(200);

  currentStepRef.current = currentStep;

  function constrainButtonPosition(centerX, centerY, size) {
    const half = size / 2;
    const clampedCenterX = Math.max(
      half,
      Math.min(centerX, window.innerWidth - half),
    );
    const clampedCenterY = Math.max(
      half,
      Math.min(centerY, window.innerHeight - half),
    );

    return {
      x: clampedCenterX - half,
      y: clampedCenterY - half,
    };
  }

  React.useEffect(() => {
    if (currentStep !== 3) return;
    setSecondsLeft(30);
  }, [currentStep]);

  React.useLayoutEffect(() => {
    if (currentStep !== 3 || !buttonRef.current) return;

    const button = buttonRef.current;
    const savedWidth = button.style.width;
    button.style.width = "max-content";
    const naturalWidth = button.offsetWidth;
    button.style.width = savedWidth;
    minButtonSizeRef.current = naturalWidth;

    const initialSize = Math.max(200, naturalWidth);
    setButtonSize(initialSize);
    setButtonPos(
      constrainButtonPosition(
        window.innerWidth / 2,
        window.innerHeight / 2,
        initialSize,
      ),
    );
  }, [currentStep]);

  // fitts button + calculating cursor
  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  React.useEffect(() => {
    if (currentStep !== 3) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [currentStep]);

  React.useEffect(() => {
    if (currentStep !== 3 || secondsLeft > 0) return;

    setCurrentStep(2);
    setSecondsLeft(30);
  }, [currentStep, secondsLeft]);

  function advanceStep() {
    setCurrentStep((prevStep) => prevStep + 1);
  }

  function handleMouseMove(e) {
    if (!buttonRef.current || currentStepRef.current !== 3) return;

    const cursorX = e.clientX;
    const cursorY = e.clientY;

    const rect = buttonRef.current.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;
    const size = rect.width;

    const distance = Math.hypot(
      cursorX - buttonCenterX,
      cursorY - buttonCenterY,
    );

    const newCenter = {
      x: buttonCenterX + (buttonCenterX - cursorX) * 0.3,
      y: buttonCenterY + (buttonCenterY - cursorY) * 0.3,
    };

    if (distance < 150) {
      const minSize = minButtonSizeRef.current;
      const nextSize = Math.max(minSize, size - 2);
      setButtonSize(nextSize);
      setButtonPos(constrainButtonPosition(newCenter.x, newCenter.y, nextSize));
    }
  }

  return (
    <main id="cancel-container">
      {currentStep == 1 && (
        <>
          <button
            type="button"
            className="cancel-back-button"
            onClick={goBack}
          >
            <ArrowLeft size={18} />
            Back
          </button>
          <section className="profile-container">
          <header className="billing-header">
            <div className="billing-title">
              <h2>Plan and Billing</h2>
              <p>Manage your plan and payments</p>
            </div>
            <button className="cancel-subscription" onClick={advanceStep}>
              Cancel Subscription
            </button>
          </header>
          <div className="billing-details">
            <h2>Current plan</h2>
            <div className="billing-info container">
              <p>Monthly plan</p>
              <h1>$99.99/monthly</h1>
            </div>
            <div className="billing-info container">
              <p>Renews on</p>
              <h1>{renewalDate}</h1>
            </div>
          </div>
        </section>
        </>
      )}

      {currentStep == 2 && (
        <section className="ultimatum-confirm-container">
          <div className="ultimatum-confirm-details">
          <h2>Are you sure...</h2>
          <p>
            You would be giving up <strong>SO</strong> much!
          </p>
          <p>
            You have completed <strong>0 tasks</strong>.
          </p>
          <p>
            You have <strong>1 untitled document</strong>.
          </p>
          <p>
            You have been a member for <strong>1 day</strong>.
          </p>
          <p>
            You have sent <strong>0 messages</strong> to your team.
          </p>
          <p>
            <i>
              Are you sure you want to leave <strong>all</strong> this behind?
            </i>
          </p>
          </div>
          <div className="confirm-shame-buttons">
            <button className="confirm-shame-button-1" onClick={advanceStep}>Yes, I'm Giving Up And Hate My Team</button>
            <button className="confirm-shame-button-2" onClick={goBack}>No, Help My Team Succeed</button>
          </div>
        </section>
      )}

      {currentStep == 3 && (
        <section className="countdown-fitts-container">
          <div className="countdown-container">
            <p>⚠️ Your cancellation expires in:</p>
            <h1 className="countdown-timer">
              00:{String(secondsLeft).padStart(2, "0")}
            </h1>
          </div>
          <button
            className="fitts-button"
            ref={buttonRef}
            style={{
              position: "fixed",
              left: buttonPos.x,
              top: buttonPos.y,
              width: buttonSize,
            }}
            onClick={advance}
          >
            Confirm Cancellation
          </button>
        </section>
      )}
    </main>
  );
}

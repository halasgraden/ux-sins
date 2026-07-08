import { useJourney } from "../../context/JourneyProvider.jsx";
import React from "react";

export default function Cancel() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [secondsLeft, setSecondsLeft] = React.useState(30);

  const { advance } = useJourney();

  // renewal date
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 7);
  const renewalDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const buttonRef = React.useRef(null);
  const [buttonPos, setButtonPos] = React.useState({ x: 0, y: 0 });
  const [buttonSize, setButtonSize] = React.useState(200);

  // fitts button + calculating cursor
  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  React.useEffect(() => {
    if (currentStep !== 3) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) return 30;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentStep]);

  function advanceStep() {
    setCurrentStep((prevStep) => prevStep + 1);
  }

  function handleMouseMove(e) {
    if (!buttonRef.current) return;

    const cursorX = e.clientX;
    const cursorY = e.clientY;

    const rect = buttonRef.current.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;

    const distance = Math.hypot(
      cursorX - buttonCenterX,
      cursorY - buttonCenterY,
    );

    const newPosition = {
      x: buttonCenterX + (buttonCenterX - cursorX) * 0.3,
      y: buttonCenterY + (buttonCenterY - cursorY) * 0.3,
    };

    if (distance < 150) {
      setButtonSize((prev) => Math.max(80, prev - 2));
      setButtonPos(newPosition);
    }
  }

  return (
    <main id="cancel-container">
      <button onClick={advance}>Advance</button>
      {currentStep == 1 && (
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
      )}

      {currentStep == 2 && (
        <section className="ultimatum-confirm-container">
          <h1>Are you sure...</h1>
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
          <div className="confirm-shame-buttons">
            <button>Yes, I'm Giving Up And Hate My Team</button>
            <button>No, Help My Team Succeed</button>
          </div>
        </section>
      )}

      {currentStep == 3 && (
        <section className="countdown-fitts-container">
          <div className="countdown-container">
            <p>⚠️ Your cancellation expires in:</p>
            <h1 className="countdown-timer">00:{secondsLeft}s</h1>
          </div>
          <button
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

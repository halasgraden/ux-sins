import {useJourney} from "../../context/JourneyProvider.jsx"
import React from "react"

export default function Cancel() {

  const [currentStep, setCurrentStep] = React.useState(1)
  const [secondsLeft, setSecondsLeft] = React.useState(30)

  const {advance} = useJourney()

  // renewal date
  const currentDate = new Date()
  currentDate.setDate(currentDate.getDate() + 7)
  const renewalDate = currentDate.toLocaleDateString('en-US', { 
    month: 'long', day: 'numeric', year: 'numeric' 
  })

  // fitts button + calculating cursor
  useEffect(() => {
  window.addEventListener('mousemove', handleMouseMove)
  return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const buttonRef = React.useRef(null)
  const [buttonPos, setButtonPos] = React.useState({ x: 0, y: 0 })
  const [buttonSize, setButtonSize] = React.useState(200)

  const distance = Math.hypot(cursorX - buttonCenterX, cursorY - buttonCenterY)


  // 1: MANAGE PROFILE plan name, price, renewal date, and one "Cancel Subscription" button
  // 2: ULTIMATUM + CONFIRMSHAMING
  // 3: COUNTDOWN + FITTS BUTTON

  function advanceStep() {
    setCurrentStep(prevStep => prevStep + 1)
  }

  return (
    <main>
      {currentStep == 1 && <section className="profile-container">
        <header className="billing-header">
          <div className="billing-title">
          <h2>Plan and Billing</h2>
          <p>Manage your plan and payments</p>
          </div>
          <button className="cancel-subscription" onClick={advanceStep}>Cancel Subscription</button>
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
      
      </section>}

      {currentStep == 2 && <section className="ultimatum-confirm-container">
        <button>Yes, I'm Giving Up And Hate My Team</button>
        <button>No, Help My Team Succeed</button>
      </section>}

      {currentStep == 3 && <section className="countdown-fitts-container">

      </section>
      }
    </main>
  )
}
import {useJourney} from "../../context/JourneyProvider.jsx"
import Confetti from 'react-confetti'
import React from "react"

export default function Success() {
  const {advance} = useJourney()

  const [showNotification, setShowNotification] = React.useState(true)
  const [notificationKey, setNotificationKey] = React.useState(0)

  React.useEffect(() => {
  const timer = setTimeout(() => {
    setShowNotification(false)
  }, 10000)
  return () => clearTimeout(timer)
}, [])

  return ( 
    <main>
      <Confetti />
      <section className="success-container">
        <h1>You've successfully cancelled your Synergy subscription.</h1>
        <p>Bye I guess...</p>
        <button className="success-continue-button" onClick={advance}>Continue</button>
      </section>

      {showNotification && <div key={notificationKey} className="plan-notification">
            You have been moved to our Lite Plan. Your card will be charged $49.99 per month starting in 7 days. To manage your subscription, please log into your Synergy account.
      </div>}
    </main>
  )
}

// Popup that says "You have been moved to our Lite Plan. Your card will be charged $49.99 per month starting in 7 days. To manage your subscription, please log into your Synergy account."
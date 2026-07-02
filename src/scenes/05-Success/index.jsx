import {useJourney} from "../../context/JourneyProvider.jsx"
import Confetti from 'react-confetti'

export default function Success() {
  const {advance} = useJourney()
  return ( 
    <main>
      <Confetti />
      <section className="success-container">
        <p>You've successfully cancelled your Synergy subscription. We'll miss you. 😢</p>
      </section>
    </main>
  )
}

// Popup that says "You have been moved to our Lite Plan. Your card will be charged $49.99 per month starting in 7 days. To manage your subscription, please log into your Synergy account."
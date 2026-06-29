import { JourneyProvider, useJourney } from "./context/JourneyProvider";
import Landing from "./scenes/01-Landing"
import Onboarding from "./scenes/02-Onboarding"
import Product from "./scenes/03-Product"
import Cancel from "./scenes/04-Cancel"
import Success from "./scenes/05-Success"
import Analysis from "./scenes/06-Analysis"

const scenes = {
  1: Landing,
  2: Onboarding,
  3: Product,
  4: Cancel,
  5: Success,
  6: Analysis,
}

function SceneRouter() {
  const { currentScene } = useJourney()
  const Scene = scenes[currentScene]
  return <Scene />
}

export default function App() {
  return (
    <JourneyProvider>
        <SceneRouter />
    </JourneyProvider>
  )
}
import React from "react"
import { useJourney } from "../context/JourneyProvider.jsx"
import { LensContext } from "./lensContext.js"
import sins from "../data/sins.js"

function LensState({ children }) {
  const { currentScene } = useJourney()
  const [activeDotId, setActiveDotId] = React.useState(null)

  function toggleDot(sinId) {
    setActiveDotId((prev) => (prev === sinId ? null : sinId))
  }

  const contextValue = React.useMemo(
    () => ({
      activeDotId,
      toggleDot,
      sceneSinIds: sins
        .filter((sin) => sin.scene === currentScene)
        .map((sin) => sin.id),
    }),
    [activeDotId, currentScene],
  )

  return (
    <LensContext.Provider value={contextValue}>{children}</LensContext.Provider>
  )
}

export default function LensProvider({ children }) {
  const { currentScene } = useJourney()

  return <LensState key={currentScene}>{children}</LensState>
}

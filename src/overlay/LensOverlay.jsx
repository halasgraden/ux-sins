import React from "react"
import { createPortal } from "react-dom"
import { useJourney } from "../context/JourneyProvider.jsx"
import AnnotationBubble from "./AnnotationBubble.jsx"
import { getSceneAnchorRects } from "./sinAnchors.js"
import { useLens } from "./useLens.js"

export default function LensOverlay() {
  const { lensOn } = useJourney()
  const { activeDotId, toggleDot, sceneSinIds } = useLens()
  const [anchors, setAnchors] = React.useState([])

  React.useLayoutEffect(() => {
    if (!lensOn) return

    let frameId

    function updateAnchors() {
      setAnchors(getSceneAnchorRects(sceneSinIds))
      frameId = requestAnimationFrame(updateAnchors)
    }

    updateAnchors()
    return () => cancelAnimationFrame(frameId)
  }, [lensOn, sceneSinIds])

  if (!lensOn) return null

  return createPortal(
    <div className="lens-overlay" aria-hidden={false}>
      {anchors.map(({ sinId, rect }) => (
        <AnnotationBubble
          key={sinId}
          sinId={sinId}
          anchorRect={rect}
          isOpen={activeDotId === sinId}
          onToggle={() => toggleDot(sinId)}
        />
      ))}
    </div>,
    document.body,
  )
}

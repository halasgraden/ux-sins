import { Eye, EyeClosed } from "lucide-react"
import { useJourney } from "../context/JourneyProvider.jsx"

export default function DesignerLens() {
  const { lensOn, toggleLens } = useJourney()

  return (
    <button
      type="button"
      className={`designer-lens-toggle${lensOn ? " designer-lens-toggle-active" : ""}`}
      onClick={toggleLens}
      aria-pressed={lensOn}
      aria-label={lensOn ? "Turn designer lens off" : "Turn designer lens on"}
    >
      {lensOn ? <Eye size={22} /> : <EyeClosed size={22} />}
    </button>
  )
}

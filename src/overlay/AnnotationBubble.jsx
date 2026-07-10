import React from "react"
import { X } from "lucide-react"
import { getSinById } from "./sinUtils.js"

export const DOT_SIZE = 14
const DOT_GAP = 4
const MODAL_GAP = 8
const MODAL_MAX_WIDTH = 280
const VIEWPORT_EDGE = 16

function getModalWidth() {
  return Math.min(MODAL_MAX_WIDTH, window.innerWidth - 32)
}

function getDotPosition(rect) {
  return {
    top: rect.top + rect.height / 2,
    left: rect.right + DOT_GAP,
  }
}

function getModalPosition(dot, modalWidth, modalHeight = 0) {
  const vw = window.innerWidth
  const vh = window.innerHeight

  const rightOfDot = dot.left + DOT_SIZE + MODAL_GAP
  const leftOfDot = dot.left - MODAL_GAP - modalWidth

  let left
  if (rightOfDot + modalWidth <= vw - VIEWPORT_EDGE) {
    left = rightOfDot
  } else if (leftOfDot >= VIEWPORT_EDGE) {
    left = leftOfDot
  } else {
    const spaceRight = vw - VIEWPORT_EDGE - rightOfDot
    const spaceLeft = dot.left - VIEWPORT_EDGE - MODAL_GAP
    if (spaceRight >= spaceLeft) {
      left = Math.min(rightOfDot, vw - VIEWPORT_EDGE - modalWidth)
    } else {
      left = Math.max(VIEWPORT_EDGE, leftOfDot)
    }
  }

  const halfHeight = modalHeight / 2
  const minTop = VIEWPORT_EDGE + halfHeight
  const maxTop = vh - VIEWPORT_EDGE - halfHeight
  const top =
    minTop > maxTop
      ? vh / 2
      : Math.min(Math.max(dot.top, minTop), maxTop)

  return { top, left }
}

export default function AnnotationBubble({
  sinId,
  anchorRect,
  isOpen,
  onToggle,
}) {
  const sin = getSinById(sinId)
  const modalRef = React.useRef(null)
  const [modalPosition, setModalPosition] = React.useState(null)

  const dotPosition = React.useMemo(() => {
    if (!anchorRect) return null
    return getDotPosition(anchorRect)
  }, [anchorRect])

  React.useLayoutEffect(() => {
    if (!isOpen || !anchorRect || !modalRef.current || !dotPosition) {
      setModalPosition(null)
      return
    }

    function updatePosition() {
      const modalRect = modalRef.current.getBoundingClientRect()
      setModalPosition(
        getModalPosition(dotPosition, modalRect.width, modalRect.height),
      )
    }

    updatePosition()
    window.addEventListener("resize", updatePosition)
    return () => window.removeEventListener("resize", updatePosition)
  }, [isOpen, anchorRect, dotPosition, sinId])

  React.useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(e) {
      if (e.key === "Escape") onToggle()
    }

    function handlePointerDown(e) {
      if (
        modalRef.current?.contains(e.target) ||
        e.target.closest(`[data-lens-dot="${sinId}"]`)
      ) {
        return
      }
      onToggle()
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("pointerdown", handlePointerDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("pointerdown", handlePointerDown)
    }
  }, [isOpen, onToggle, sinId])

  if (!sin || !anchorRect || !dotPosition) return null

  const initialModalPosition = getModalPosition(
    dotPosition,
    getModalWidth(),
  )

  return (
    <>
      <button
        type="button"
        className={`lens-dot${isOpen ? " lens-dot-open" : ""}`}
        data-lens-dot={sinId}
        style={{
          top: dotPosition.top,
          left: dotPosition.left,
        }}
        aria-label={`View UX sin: ${sin.name}`}
        aria-expanded={isOpen}
        onClick={(e) => {
          e.stopPropagation()
          onToggle()
        }}
      />
      {isOpen && (
        <div
          ref={modalRef}
          className="lens-modal"
          style={{
            top: (modalPosition ?? initialModalPosition).top,
            left: (modalPosition ?? initialModalPosition).left,
            visibility: modalPosition ? "visible" : "hidden",
          }}
          role="dialog"
          aria-labelledby={`lens-modal-title-${sinId}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="lens-modal-header">
            <span className="sin-category">{sin.category}</span>
            <button
              type="button"
              className="lens-modal-close"
              aria-label="Close"
              onClick={(e) => {
                e.stopPropagation()
                onToggle()
              }}
            >
              <X size={16} />
            </button>
          </div>
          <h3 className="lens-modal-title" id={`lens-modal-title-${sinId}`}>
            {sin.name}
          </h3>
          <p className="lens-modal-description">{sin.shortDescription}</p>
          <div className="sin-meta-section">
            <p className="sin-label">Principle</p>
            <a className="sin-principle-link" href={sin.reference}>
              {sin.principle}
            </a>
          </div>
        </div>
      )}
    </>
  )
}

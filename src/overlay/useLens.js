import React from "react"
import { LensContext } from "./lensContext.js"

export function useLens() {
  const context = React.useContext(LensContext)
  if (!context) {
    throw new Error("useLens must be used within a LensProvider")
  }
  return context
}

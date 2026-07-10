function unionRect(elements) {
  if (!elements.length) return null

  let top = Infinity
  let left = Infinity
  let right = -Infinity
  let bottom = -Infinity

  for (const el of elements) {
    const rect = el.getBoundingClientRect()
    if (rect.width === 0 && rect.height === 0) continue
    top = Math.min(top, rect.top)
    left = Math.min(left, rect.left)
    right = Math.max(right, rect.right)
    bottom = Math.max(bottom, rect.bottom)
  }

  if (top === Infinity) return null

  return new DOMRect(left, top, right - left, bottom - top)
}

export function resolveComingSoonNav() {
  const items = document.querySelectorAll(".sidebar li.sidebar-coming-soon")
  return unionRect(Array.from(items))
}

function resolveTextRect(selector) {
  const element = document.querySelector(selector)
  if (!element) return null

  const range = document.createRange()
  range.selectNodeContents(element)
  const rects = Array.from(range.getClientRects())
  range.detach()

  if (!rects.length) {
    const rect = element.getBoundingClientRect()
    if (rect.width === 0 && rect.height === 0) return null
    return rect
  }

  let top = Infinity
  let left = Infinity
  let right = -Infinity
  let bottom = -Infinity

  for (const rect of rects) {
    if (rect.width === 0 && rect.height === 0) continue
    top = Math.min(top, rect.top)
    left = Math.min(left, rect.left)
    right = Math.max(right, rect.right)
    bottom = Math.max(bottom, rect.bottom)
  }

  if (top === Infinity) return null

  return new DOMRect(left, top, right - left, bottom - top)
}

export function resolvePoorHierarchy() {
  return resolveTextRect(".testimonials-landing-container h4")
}

function resolveVagueError() {
  const error = document.querySelector(".product-error-message")
  if (error) {
    const rect = error.getBoundingClientRect()
    if (rect.width > 0 || rect.height > 0) return rect
  }

  const button = document.querySelector(".create-project-button")
  if (!button) return null
  const rect = button.getBoundingClientRect()
  if (rect.width === 0 && rect.height === 0) return null
  return rect
}

function resolveSelector(selector) {
  const element = document.querySelector(selector)
  if (!element) return null
  const rect = element.getBoundingClientRect()
  if (rect.width === 0 && rect.height === 0) return null
  return rect
}

export const sinAnchors = {
  "bad-contrast-text": () => resolveTextRect(".obscure-text p"),
  "obscure-copy": () => resolveTextRect(".obscure-text h1"),
  "too-many-ctas": ".too-many-ctas .landing-button-variant:last-of-type",
  "poor-hierarchy": resolvePoorHierarchy,
  "weird-scale-progress": ".progress-bar",
  "placeholder-labels": ".tier1-form input:first-of-type",
  "deceiving-form": "#onboarding-form .tier2-form",
  "broken-checkbox": ".terms .checkbox",
  "reversed-buttons": ".submit-button",
  "destructive-action": ".clear-button",
  "coming-soon-nav": resolveComingSoonNav,
  "vague-product-description": () => resolveTextRect(".empty-state h2"),
  "aggressive-empty-state": () => resolveTextRect(".empty-state p"),
  "vague-error": resolveVagueError,
  "absurd-ultimatum": () => resolveTextRect(".ultimatum-confirm-details h2"),
  "confirmshaming": ".confirm-shame-button-1",
  "fake-countdown": ".countdown-timer",
  "fitts-button": ".fitts-button",
}

export function resolveAnchorRect(sinId) {
  const anchor = sinAnchors[sinId]
  if (!anchor) return null

  if (typeof anchor === "function") {
    const result = anchor()
    if (result instanceof DOMRect) return result
    if (result instanceof Element) {
      const rect = result.getBoundingClientRect()
      if (rect.width === 0 && rect.height === 0) return null
      return rect
    }
    return null
  }

  return resolveSelector(anchor)
}

export function getSceneAnchorRects(sceneSinIds) {
  const anchors = []

  for (const sinId of sceneSinIds) {
    const rect = resolveAnchorRect(sinId)
    if (rect) {
      anchors.push({ sinId, rect })
    }
  }

  return anchors
}

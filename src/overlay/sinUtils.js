import sins from "../data/sins.js"

export function getSinById(sinId) {
  return sins.find((sin) => sin.id === sinId) ?? null
}

export const PETAL = "Spatial-Gold";
export const INVARIANT = "SPATIAL_STATIONARY";
export function verify(input) {
  if (!input || typeof input !== "object") {
    return {
      pass: false,
      stationary: false,
      signal: "spatial-gold:INVALID_INPUT",
      reason: "input must be an object"
    };
  }
  const stationary =
    input.repo === "Riverbraid-Spatial-Gold" &&
    input.petal === "Spatial-Gold" &&
    input.ring === 1 &&
    input.invariant === "SPATIAL_STATIONARY";
  return {
    pass: true,
    stationary,
    signal: stationary ? "spatial-gold:STATIONARY" : "spatial-gold:DRIFT",
    reason: stationary
      ? "Stationary fields match declared petal identity"
      : "One or more stationary fields drift from declaration"
  };
}

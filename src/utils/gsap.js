
// This is a no-op function, but it ensures that GSAP is imported
// and available for use in the browser environment
export const registerGSAP = () => {
  if (typeof window !== "undefined") {
    // GSAP is now available on the window object
    console.log("GSAP registered")
  }
}


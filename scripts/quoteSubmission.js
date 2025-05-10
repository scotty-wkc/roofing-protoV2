document.addEventListener("DOMContentLoaded", () => {
  const priceEstimate = document.getElementById("priceEstimate");

  const urlParams = new URLSearchParams(window.location.search);
  const houseSize = urlParams.get("houseSize");
  const tileType = urlParams.get("tileType");

  const priceRanges = {
    small: {
      clay: "$5,000 - $7,000",
      concrete: "$4,500 - $6,500",
      slate: "$6,000 - $8,500",
      metal: "$5,500 - $7,500",
      other: "We will contact you with a custom quote.",
   },
    medium: {
      clay: "$8,000 - $12,000",
      concrete: "$7,500 - $11,000",
      slate: "$10,000 - $14,000",
      metal: "$9,000 - $13,000",
      other: "We will contact you with a custom quote.",
   },
    large: {
      clay: "$15,000 - $20,000",
      concrete: "$13,000 - $18,000",
      slate: "$18,000 - $25,000",
      metal: "$16,000 - $22,000",
      other: "We will contact you with a custom quote.",
   },
    other: {
      clay: "We will contact you with a custom quote.",
     concrete: "We will contact you with a custom quote.",
      slate: "We will contact you with a custom quote.",
     metal: "We will contact you with a custom quote.",
     other: "We will contact you with a custom quote.",
   },
  };

  if (houseSize && tileType) {
    priceEstimate.textContent = `Estimated Price Range: ${
      priceRanges[houseSize]?.[tileType] || "We will contact you with a custom quote."    
    }`;
  } else {
    priceEstimate.textContent = "Unable to calculate price. We will contact you.";
  }
});
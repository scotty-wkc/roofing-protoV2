document.getElementById("houseSize").addEventListener("change", function () {
  const customHouseSize = document.getElementById("customHouseSize");
  customHouseSize.style.display = this.value === "other" ? "block" : "none";
  updatePriceEstimate();
});

document.getElementById("tileType").addEventListener("change", function () {
  const customTileType = document.getElementById("customTileType");
  customTileType.style.display = this.value === "other" ? "block" : "none";
  updatePriceEstimate();
});

document.getElementById("quoteSubmissionForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const houseSize = document.getElementById("houseSize").value;
  const tileType = document.getElementById("tileType").value;

  if (!name || !email || !houseSize || !tileType) {
    alert("Please fill out all required fields.");
    return;
  }

  alert("Thank you for submitting your quote request! We will get back to you soon.");
  this.reset();
  document.getElementById("priceEstimate").textContent = "";
});

function updatePriceEstimate() {
  const houseSize = document.getElementById("houseSize").value;
  const tileType = document.getElementById("tileType").value;
  const priceEstimate = document.getElementById("priceEstimate");

  const priceRanges = {
    small: {
      clay: "$5,000 - $7,000",
      concrete: "$4,500 - $6,500",
      slate: "$6,000 - $8,500",
      metal: "$5,500 - $7,500",
      other: "Contact us for a custom quote",
    },
    medium: {
      clay: "$8,000 - $12,000",
      concrete: "$7,500 - $11,000",
      slate: "$10,000 - $14,000",
      metal: "$9,000 - $13,000",
      other: "Contact us for a custom quote",
    },
    large: {
      clay: "$15,000 - $20,000",
      concrete: "$13,000 - $18,000",
      slate: "$18,000 - $25,000",
      metal: "$16,000 - $22,000",
      other: "Contact us for a custom quote",
    },
    other: {
      clay: "Contact us for a custom quote",
      concrete: "Contact us for a custom quote",
      slate: "Contact us for a custom quote",
      metal: "Contact us for a custom quote",
      other: "Contact us for a custom quote",
    },
  };

  if (houseSize && tileType) {
    priceEstimate.textContent = `Estimated Price Range: ${
      priceRanges[houseSize][tileType] || "Contact us for a custom quote"
    }`;
  } else {
    priceEstimate.textContent = "";
  }
}
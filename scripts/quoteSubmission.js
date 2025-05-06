document.addEventListener("DOMContentLoaded", function () {
  const houseSize = document.getElementById("houseSize");
  const tileType = document.getElementById("tileType");
  const customHouseSize = document.getElementById("customHouseSize");
  const customTileType = document.getElementById("customTileType");
  const priceEstimate = document.getElementById("priceEstimate");

  if (houseSize) {
    houseSize.addEventListener("change", function () {
      customHouseSize.style.display = this.value === "other" ? "block" : "none";
      updatePriceEstimate();
    });
  }

  if (tileType) {
    tileType.addEventListener("change", function () {
      customTileType.style.display = this.value === "other" ? "block" : "none";
      updatePriceEstimate();
    });
  }

  const quoteSubmissionForm = document.getElementById("quoteSubmissionForm");
  if (quoteSubmissionForm) {
    quoteSubmissionForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      if (!name || !email || !houseSize.value || !tileType.value) {
        alert("Please fill out all required fields.");
        return;
      }

      alert("Thank you for submitting your quote request! We will get back to you soon.");
      this.reset();
      priceEstimate.textContent = "";
    });
  }

  function updatePriceEstimate() {
    const houseSizeValue = houseSize ? houseSize.value : "";
    const tileTypeValue = tileType ? tileType.value : "";

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

    if (houseSizeValue && tileTypeValue) {
      priceEstimate.textContent = `Estimated Price Range: ${
        priceRanges[houseSizeValue]?.[tileTypeValue] || "Contact us for a custom quote"
      }`;
    } else {
      priceEstimate.textContent = "";
    }
  }
});
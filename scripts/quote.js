document.getElementById("houseSize").addEventListener("change", function () {
  const customHouseSizeContainer = document.querySelector(".custom-house-size-container");
  customHouseSizeContainer.style.display = this.value === "other" ? "flex" : "none";
});

document.getElementById("tileType").addEventListener("change", function () {
  const customTileType = document.getElementById("customTileType");
  customTileType.style.display = this.value === "other" ? "block" : "none";
});

document.getElementById("quoteForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const houseSize = document.getElementById("houseSize").value;
  const tileType = document.getElementById("tileType").value;

  if (!houseSize || !tileType) {
    alert("Please fill out all required fields.");
    return;
  }

  const queryParams = new URLSearchParams({
    houseSize,
    tileType,
  });

  window.location.href = `./navOptions/quoteSubmission.html?${queryParams.toString()}`;
});
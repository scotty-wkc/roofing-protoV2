  document.getElementById("houseSize").addEventListener("change", function () {
    const customHouseSize = document.getElementById("customHouseSize");
    customHouseSize.style.display = this.value === "other" ? "block" : "none";
  });

  document.getElementById("tileType").addEventListener("change", function () {
    const customTileType = document.getElementById("customTileType");
    customTileType.style.display = this.value === "other" ? "block" : "none";
  });
      document.getElementById("houseSize").addEventListener("change", function () {
        const customHouseSize = document.getElementById("customHouseSize");
        customHouseSize.style.display =
          this.value === "other" ? "block" : "none";
      });

      document.getElementById("tileType").addEventListener("change", function () {
        const customTileType = document.getElementById("customTileType");
        const selectedOptions = Array.from(this.selectedOptions).map(
          (option) => option.value
        );
        customTileType.style.display = selectedOptions.includes("other")
          ? "block"
          : "none";
      });
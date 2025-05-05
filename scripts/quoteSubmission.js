document.getElementById("houseSize").addEventListener("change", function () {
  const customHouseSize = document.getElementById("customHouseSize");
  customHouseSize.style.display = this.value === "other" ? "block" : "none";
});

document.getElementById("tileType").addEventListener("change", function () {
  const customTileType = document.getElementById("customTileType");
  customTileType.style.display = this.value === "other" ? "block" : "none";
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
});
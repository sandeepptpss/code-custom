<script>
document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname.toLowerCase(); // full path
  const pathParts = path.split("/").filter(Boolean);   // ["collections", "name-necklaces", "silver"]

  // Check if we are on a collection page with a tag at the end
  if (pathParts[0] === "collections" && pathParts.length >= 3) {
    const collectionHandle = pathParts[1]; // "name-necklaces"
    const tagName = pathParts[2];          // "silver"

    console.log(`Collection: ${collectionHandle}, Tag: ${tagName}`);

    const productCards = document.querySelectorAll("product-card");
    productCards.forEach((card, index) => {
      const swatches = card.querySelectorAll("[js-product-card='swatch']");
      if (!swatches.length) return;

      // Find swatch that matches the tag name
      const matchingSwatch = Array.from(swatches).find(btn => {
        const value = (btn.dataset.valueName || btn.textContent || "").toLowerCase();
        return value.includes(tagName); // dynamically match "silver" or any other tag
      });

      if (matchingSwatch) {
        matchingSwatch.click();
        console.log(`Card ${index} swatch for "${tagName}" clicked`);
      }
    });
  } else {
    console.log("Not on a collection page with a tag");
  }
});
</script>


 <script>
document.addEventListener("DOMContentLoaded", function () {
  console.log("Silver swatch script loaded");
  if (window.location.pathname.includes("/collections/{{collection.handle}}/Silver")) {
    const productCards = document.querySelectorAll("product-card");
    productCards.forEach((card, index) => {
      const swatches = card.querySelectorAll("[js-product-card='swatch']");
      if (!swatches.length) return;
      const silverSwatch = Array.from(swatches).find(btn => {
        const value = btn.dataset.valueName || btn.textContent || "";
        return value.toLowerCase().includes("silver");
      });
      if (silverSwatch) {
        silverSwatch.click();
        console.log(`Card ${index} silver swatch clicked`);
      }
    });
  } else {
    console.log("Not on necklaces collection page");
  }
});
</script>

pre final 
     {% if collection.metafields.custom.collection_variant_color != blank %}
<script>
document.addEventListener("DOMContentLoaded", function () {
  const collectionHandle = "{{ collection.handle }}";
  const metafieldValues = '{{ collection.metafields.custom.collection_variant_color | downcase }}'
    .split(',')
    .map(v => v.trim());

  const applySwatchSelection = (context = document) => {
    const productCards = context.querySelectorAll("product-card");
    productCards.forEach((card) => {
      const swatches = card.querySelectorAll(".custom-variant-filter");
      if (!swatches.length) return;

      const matchSwatch = Array.from(swatches).find((btn) => {
        const value = (btn.dataset.valueName || btn.textContent || "")
          .toLowerCase()
          .trim();
        return metafieldValues.some((metaVal) => value.includes(metaVal));
      });

      if (matchSwatch) {
        matchSwatch.click();
        card.closest('.custom-product-card')?.classList.remove("not-match");
      } else {
        card.closest('.custom-product-card')?.classList.add("not-match");
      }
    });
  }
  const path = window.location.pathname;  
  const search = window.location.search;
  
  const isValidCollectionPage =
    path === `/collections/${collectionHandle}` && search === "" ||  
    path === `/collections/${collectionHandle}` && search.startsWith("?page="); 

  if (isValidCollectionPage) {
    applySwatchSelection();

    document.addEventListener("shopify:section:load", applySwatchSelection);
    const loadMoreBtn = document.querySelector('.button--loader[js-product-listing="loadMore"]');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", function () {
        setTimeout(() => {
          applySwatchSelection();
        }, 1500);
      });
    }
  }
});
</script>
{% endif %}
  


// final code filter
<script>
document.addEventListener("DOMContentLoaded", function () {
  console.log("Swatch auto-select script loaded");

  if (window.location.pathname.includes("/collections/{{ collection.handle }}")) {
    const productCards = document.querySelectorAll("product-card");
    const metafieldValues = "{{ collection.metafields.custom.collection_variant_color | downcase }}"
      .split(",")
      .map(v => v.trim());

    productCards.forEach((card, index) => {
      const swatches = card.querySelectorAll(".custom-variant-filter");
      if (!swatches.length) return;

      // Find the first swatch that matches ANY of the metafield values
      const matchSwatch = Array.from(swatches).find(btn => {
        const value = (btn.dataset.valueName || btn.textContent || "").toLowerCase().trim();
        return metafieldValues.some(metaVal => value.includes(metaVal));
      });

      if (matchSwatch) {
        matchSwatch.click();
        console.log(`Card ${index}: "${matchSwatch.textContent.trim()}" swatch clicked`);
      }
    });
  } else {
    console.log("Not on {{ collection.handle }} collection page");
  }
});
</script>



{% if collection.metafields.custom.collection_variant_color %}
  {% assign metaobject = collection.metafields.custom.collection_variant_color.value %}
<script>
document.addEventListener("DOMContentLoaded", function () {
  console.log("Silver swatch script loaded");
  if (window.location.pathname.includes("/collections/{{collection.handle}}")) {
    const productCards = document.querySelectorAll("product-card");
    productCards.forEach((card, index) => {
      const swatches = card.querySelectorAll(".custom-variant-filter");
      if (!swatches.length) return;
      const silverSwatch = Array.from(swatches).find(btn => {
        const value = btn.dataset.valueName || btn.textContent || "";
        return value.toLowerCase().includes("{{ metaobject.collection_variant_color | downcase }}");
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
      const swatches = card.querySelectorAll(".custom-variant-filter");
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


<script>
document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;
  const productCards = document.querySelectorAll(".product-card"); // adjust selector if needed

  if (path.includes("/collections/rose-gold")) {
    productCards.forEach((card, index) => {
      const swatches = card.querySelectorAll("[js-product-card='swatch']");
      if (!swatches.length) return;

      const roseGoldSwatch = Array.from(swatches).find(btn => {
        const value = btn.dataset.valueName || btn.textContent || "";
        return value.toLowerCase().includes("rose gold");
      });

      if (roseGoldSwatch) {
        roseGoldSwatch.click();
        console.log(`Card ${index}: Rose Gold swatch clicked`);
      }
    });
  } else if (path.includes("/collections/silver-collection")) {
    productCards.forEach((card, index) => {
      const swatches = card.querySelectorAll("[js-product-card='swatch']");
      if (!swatches.length) return;

      const silverSwatch = Array.from(swatches).find(btn => {
        const value = btn.dataset.valueName || btn.textContent || "";
        return value.toLowerCase().includes("silver");
      });

      if (silverSwatch) {
        silverSwatch.click();
        console.log(`Card ${index}: Silver swatch clicked`);
      }
    });
  }
});
</script>

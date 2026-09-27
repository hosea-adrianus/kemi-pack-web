/**
 * KEMI PACK — Interactive UI Script (English Edition)
 * Handling Navigation, Product Filtering, Quick View Modal, and Contact Interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initMobileDrawer();
  initFeaturedProducts();
  initCatalogFilters();
  initProductModal();
  initContactForm();
  initURLParams();
});

/* ==========================================================================
   1. Sticky Header with Scroll Effect
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. Mobile Drawer Navigation
   ========================================================================== */
function initMobileDrawer() {
  const toggleBtn = document.querySelector(".mobile-toggle");
  const drawer = document.querySelector(".mobile-drawer");
  if (!toggleBtn || !drawer) return;

  const toggleMenu = () => {
    const isOpen = drawer.classList.toggle("open");
    toggleBtn.classList.toggle("active", isOpen);
    toggleBtn.setAttribute("aria-expanded", isOpen);
  };

  toggleBtn.addEventListener("click", toggleMenu);

  // Close drawer when clicking any link inside
  drawer.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      drawer.classList.remove("open");
      toggleBtn.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Close drawer when clicking outside
  document.addEventListener("click", (e) => {
    if (!drawer.contains(e.target) && !toggleBtn.contains(e.target) && drawer.classList.contains("open")) {
      drawer.classList.remove("open");
      toggleBtn.classList.remove("active");
    }
  });
}

/* ==========================================================================
   3. Featured Products Showcase (for index.html)
   ========================================================================== */
function initFeaturedProducts() {
  const container = document.getElementById("featuredProductsGrid");
  if (!container || typeof PRODUCTS_DATA === "undefined") return;

  // Take 4 flagship items
  const featured = PRODUCTS_DATA.slice(0, 4);
  container.innerHTML = featured.map(prod => renderProductCardHTML(prod)).join("");

  attachQuickViewButtons(container);
}

/* ==========================================================================
   4. Catalog Page Filter & Live Search (for products.html)
   ========================================================================== */
function initCatalogFilters() {
  const catalogGrid = document.getElementById("catalogGrid");
  const filterPills = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("catalogSearchInput");
  const statusCount = document.getElementById("catalogCount");

  if (!catalogGrid || typeof PRODUCTS_DATA === "undefined") return;

  let currentCategory = "all";
  let searchQuery = "";

  // Check URL category parameter (e.g. products.html?category=pharma)
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get("category");
  if (categoryParam) {
    currentCategory = categoryParam;
    filterPills.forEach(pill => {
      pill.classList.toggle("active", pill.dataset.category === categoryParam);
    });
  }

  function filterAndRender() {
    const filtered = PRODUCTS_DATA.filter(prod => {
      const matchCategory = (currentCategory === "all") || (prod.category === currentCategory);
      const matchSearch = prod.name.toLowerCase().includes(searchQuery) ||
                          prod.material.toLowerCase().includes(searchQuery) ||
                          prod.categoryLabel.toLowerCase().includes(searchQuery) ||
                          prod.id.toLowerCase().includes(searchQuery);
      return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      catalogGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1.5rem; background: #fff; border: 1px dashed #cbd5e1; border-radius: 12px;">
          <h3 style="color: #0a192f; margin-bottom: 0.5rem; font-size: 1.25rem;">No matching packaging found</h3>
          <p style="color: #64748b; margin-bottom: 1.5rem; font-size: 0.9rem;">Try searching with another keyword like "vial", "dropper", "amber", or "stopper".</p>
          <button class="btn btn-outline btn-sm" id="resetFilterBtn">Reset Filter</button>
        </div>
      `;
      const resetBtn = document.getElementById("resetFilterBtn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          currentCategory = "all";
          searchQuery = "";
          if (searchInput) searchInput.value = "";
          filterPills.forEach(p => p.classList.toggle("active", p.dataset.category === "all"));
          filterAndRender();
        });
      }
    } else {
      catalogGrid.innerHTML = filtered.map(prod => renderProductCardHTML(prod)).join("");
      attachQuickViewButtons(catalogGrid);
    }

    if (statusCount) {
      statusCount.textContent = `Showing ${filtered.length} primary packaging solutions`;
    }
  }

  // Handle Pill Clicks
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentCategory = pill.dataset.category || "all";
      filterAndRender();
    });
  });

  // Handle Search Input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterAndRender();
    });
  }

  // Initial render
  filterAndRender();
}

/* ==========================================================================
   Helper: Minimalist Product Card HTML Template (Clean B2B)
   ========================================================================== */
function renderProductCardHTML(prod) {
  return `
    <div class="product-card" data-id="${prod.id}">
      <div class="product-image-wrap">
        <span class="product-cat-tag">${prod.categoryLabel}</span>
        ${getProductSVG(prod.svgType)}
      </div>
      <div class="product-info">
        <h4 class="product-title" title="${prod.name}">${prod.name}</h4>
        <div class="product-material" title="${prod.material}">${prod.material}</div>
        
        <div class="product-spec-block">
          <div class="product-spec-line">
            <span>Ref SKU</span>
            <strong>${prod.id}</strong>
          </div>
          <div class="product-spec-line">
            <span>Capacity</span>
            <strong>${prod.capacity}</strong>
          </div>
          <div class="product-spec-line">
            <span>Neck Finish</span>
            <strong>${prod.neckFinish}</strong>
          </div>
        </div>

        <div class="product-card-actions">
          <button class="btn btn-outline btn-sm quick-view-btn" data-id="${prod.id}">
            Specs
          </button>
          <a href="contact.html?product=${encodeURIComponent(prod.name)}&ref=${prod.id}" class="btn btn-primary btn-sm">
            Request Sample
          </a>
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   5. Product Quick View Modal
   ========================================================================== */
function initProductModal() {
  const modal = document.getElementById("productQuickModal");
  if (!modal) return;

  const closeBtn = modal.querySelector(".modal-close-btn");

  const closeModal = () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

function attachQuickViewButtons(container) {
  const buttons = container.querySelectorAll(".quick-view-btn");
  const modal = document.getElementById("productQuickModal");
  if (!modal) return;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const prodId = btn.dataset.id;
      const product = PRODUCTS_DATA.find(p => p.id === prodId);
      if (!product) return;

      // Populate modal content
      document.getElementById("modalProductImage").innerHTML = getProductSVG(product.svgType);
      document.getElementById("modalProductTitle").textContent = product.name;
      document.getElementById("modalProductSku").textContent = `SKU: ${product.id} • Category: ${product.categoryLabel}`;
      document.getElementById("modalProductDesc").textContent = product.description;

      const specsContainer = document.getElementById("modalProductSpecs");
      let specsHTML = `
        <div class="modal-spec-row">
          <span class="spec-name">Material & Grade</span>
          <span class="spec-val">${product.material}</span>
        </div>
        <div class="modal-spec-row">
          <span class="spec-name">Capacity Range</span>
          <span class="spec-val">${product.capacity}</span>
        </div>
        <div class="modal-spec-row">
          <span class="spec-name">Neck Finish Standard</span>
          <span class="spec-val">${product.neckFinish}</span>
        </div>
        <div class="modal-spec-row">
          <span class="spec-name">Sterilization Method</span>
          <span class="spec-val">${product.sterilization}</span>
        </div>
        <div class="modal-spec-row">
          <span class="spec-name">Minimum Order Qty (MOQ)</span>
          <span class="spec-val">${product.moq}</span>
        </div>
      `;

      if (product.specs) {
        for (const [k, v] of Object.entries(product.specs)) {
          specsHTML += `
            <div class="modal-spec-row">
              <span class="spec-name">${k}</span>
              <span class="spec-val">${v}</span>
            </div>
          `;
        }
      }
      specsContainer.innerHTML = specsHTML;

      // Update CTA button to link with prefilled form
      const sampleBtn = document.getElementById("modalRequestSampleBtn");
      if (sampleBtn) {
        sampleBtn.href = `contact.html?product=${encodeURIComponent(product.name)}&ref=${product.id}`;
      }

      // Show modal
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });
}

/* ==========================================================================
   6. Simplified Contact Form Handler
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("rfqContactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const company = form.querySelector("#companyName")?.value || "";
    const name = form.querySelector("#fullName")?.value || "";
    const email = form.querySelector("#emailAddress")?.value || "";

    alert(`Thank you, ${name} (${company})!\n\nYour message has been sent successfully. Our team will contact you at ${email} shortly.`);

    form.reset();
  });
}

/* ==========================================================================
   7. Read URL Parameters to Pre-fill Contact Page
   ========================================================================== */
function initURLParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const prodParam = urlParams.get("product");
  const refParam = urlParams.get("ref");

  const messageBox = document.getElementById("inquiryMessage");

  if ((prodParam || refParam) && messageBox && !messageBox.value) {
    messageBox.value = `Hello Kemilau Gema Indopack Team,\n\nWe would like to request technical specifications and evaluation samples for product: ${prodParam || ''} (${refParam || ''}).`;
  }
}

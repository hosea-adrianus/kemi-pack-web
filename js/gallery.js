/**
 * KEMI PACK — Gallery Interactivity Script
 * Handles Responsive Grid Layout, Filtering, Dynamic Pagination, and Lightbox Modal
 */

document.addEventListener("DOMContentLoaded", () => {
  initGallerySystem();
});

function initGallerySystem() {
  const ITEMS_PER_PAGE = 9;
  let currentFilter = "all";
  let currentPage = 1;
  
  const allItems = Array.from(document.querySelectorAll(".gallery-item"));
  const filterBtns = document.querySelectorAll(".gallery-filter-bar .filter-btn");
  const countDisplay = document.getElementById("galleryCount");
  const paginationWrapper = document.getElementById("galleryPaginationWrapper");
  const pageNumbersContainer = document.getElementById("pageNumbers");
  const prevBtn = document.getElementById("pagePrev");
  const nextBtn = document.getElementById("pageNext");
  const paginationInfo = document.getElementById("paginationInfo");
  const galleryGrid = document.getElementById("galleryGrid");
  const filterBar = document.querySelector(".gallery-filter-bar");

  if (!allItems.length) return;

  let filteredItems = [...allItems];

  // Render & Filter Logic
  function renderGallery(resetPage = true, scrollToGrid = false) {
    if (resetPage) {
      currentPage = 1;
    }

    // Filter items
    filteredItems = allItems.filter(item => {
      const category = item.dataset.category;
      return currentFilter === "all" || category === currentFilter;
    });

    const totalItems = filteredItems.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;

    if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // Update visibility of items immediately
    allItems.forEach(item => {
      const itemIndexInFiltered = filteredItems.indexOf(item);
      const isVisibleOnCurrentPage = itemIndexInFiltered >= startIndex && itemIndexInFiltered < endIndex;

      if (isVisibleOnCurrentPage) {
        item.style.display = "block";
        item.style.opacity = "1";
      } else {
        item.style.display = "none";
        item.style.opacity = "0";
      }
    });

    // Update Top Count Display
    if (countDisplay) {
      countDisplay.textContent = `Showing ${totalItems} photo${totalItems !== 1 ? 's' : ''}`;
    }

    // Update Bottom Info & Pagination Controls
    if (paginationWrapper) {
      if (totalItems <= ITEMS_PER_PAGE) {
        paginationWrapper.style.display = totalItems === 0 ? "none" : "flex";
        const paginationBox = document.getElementById("galleryPagination");
        if (paginationBox) paginationBox.style.display = totalPages > 1 ? "inline-flex" : "none";
      } else {
        paginationWrapper.style.display = "flex";
        const paginationBox = document.getElementById("galleryPagination");
        if (paginationBox) paginationBox.style.display = "inline-flex";
      }
    }

    if (paginationInfo) {
      if (totalItems === 0) {
        paginationInfo.textContent = "No photos found";
      } else {
        const startNum = startIndex + 1;
        const endNum = Math.min(endIndex, totalItems);
        paginationInfo.textContent = `Showing ${startNum}–${endNum} of ${totalItems} photos`;
      }
    }

    // Render Page Number Buttons
    renderPaginationButtons(totalPages);

    // Smooth scroll to top of filter bar if user was scrolled down
    if (scrollToGrid && (filterBar || galleryGrid)) {
      const targetElement = filterBar || galleryGrid;
      const headerOffset = 90;
      const targetY = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      
      if (window.pageYOffset > targetY + 40) {
        window.scrollTo({
          top: targetY,
          behavior: "smooth"
        });
      }
    }
  }

  function renderPaginationButtons(totalPages) {
    if (!pageNumbersContainer) return;
    pageNumbersContainer.innerHTML = "";

    if (totalPages <= 1) {
      if (prevBtn) prevBtn.disabled = true;
      if (nextBtn) nextBtn.disabled = true;
      return;
    }

    // Update Prev / Next button disabled state
    if (prevBtn) prevBtn.disabled = currentPage === 1;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages;

    // Create numbered buttons
    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.className = `page-num ${i === currentPage ? "active" : ""}`;
      pageBtn.textContent = i;
      pageBtn.setAttribute("aria-label", `Go to page ${i}`);
      if (i === currentPage) {
        pageBtn.setAttribute("aria-current", "page");
      }

      pageBtn.addEventListener("click", () => {
        if (currentPage !== i) {
          currentPage = i;
          renderGallery(false, true);
        }
      });

      pageNumbersContainer.appendChild(pageBtn);
    }
  }

  // Filter Buttons Event Listeners
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderGallery(true, false);
    });
  });

  // Prev / Next Button Event Listeners
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderGallery(false, true);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE) || 1;
      if (currentPage < totalPages) {
        currentPage++;
        renderGallery(false, true);
      }
    });
  }

  // Initialize Lightbox Modal
  initGalleryLightbox(() => filteredItems);

  // Initial Render
  renderGallery(true, false);
}

/* ==========================================================================
   Gallery Lightbox Modal
   ========================================================================== */
function initGalleryLightbox(getFilteredItems) {
  const overlay = document.getElementById("galleryLightbox");
  if (!overlay) return;

  const closeBtn = overlay.querySelector(".lightbox-close");
  const prevBtn = overlay.querySelector(".lightbox-prev");
  const nextBtn = overlay.querySelector(".lightbox-next");
  const lbImage = document.getElementById("lightboxImage");
  const lbTag = document.getElementById("lightboxTag");
  const lbTitle = document.getElementById("lightboxTitle");
  const lbDesc = document.getElementById("lightboxDesc");
  const lbCounter = document.getElementById("lightboxCounter");

  let currentItemsList = [];
  let currentIndex = 0;

  // Open Lightbox when clicking any gallery item
  const allItems = document.querySelectorAll(".gallery-item");
  allItems.forEach(item => {
    item.addEventListener("click", (e) => {
      currentItemsList = getFilteredItems ? getFilteredItems() : Array.from(document.querySelectorAll(".gallery-item"));
      currentIndex = currentItemsList.indexOf(item);
      if (currentIndex === -1) currentIndex = 0;

      showLightboxItem(currentIndex);
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  // Display Item
  function showLightboxItem(index) {
    if (index < 0 || index >= currentItemsList.length) return;
    
    const item = currentItemsList[index];
    const img = item.querySelector("img");
    const tag = item.querySelector(".gallery-tag");
    const title = item.querySelector("h3");
    const desc = item.querySelector("p");

    lbImage.src = img.src;
    lbImage.alt = img.alt;
    lbTag.textContent = tag ? tag.textContent : "";
    lbTitle.textContent = title ? title.textContent : "";
    lbDesc.textContent = desc ? desc.textContent : "";
    
    if (lbCounter) {
      lbCounter.textContent = `${index + 1} / ${currentItemsList.length}`;
    }
    
    // Update button states
    if (prevBtn) {
      prevBtn.style.opacity = index === 0 ? "0.3" : "1";
      prevBtn.style.pointerEvents = index === 0 ? "none" : "auto";
    }
    if (nextBtn) {
      nextBtn.style.opacity = index === currentItemsList.length - 1 ? "0.3" : "1";
      nextBtn.style.pointerEvents = index === currentItemsList.length - 1 ? "none" : "auto";
    }
  }

  // Next / Previous in Lightbox
  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (currentIndex > 0) {
        currentIndex--;
        showLightboxItem(currentIndex);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (currentIndex < currentItemsList.length - 1) {
        currentIndex++;
        showLightboxItem(currentIndex);
      }
    });
  }

  // Close Lightbox
  const closeLightbox = () => {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeLightbox();
    });
  }

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeLightbox();
    }
  });

  // Keyboard Navigation
  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("active")) return;
    
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft" && currentIndex > 0) {
      currentIndex--;
      showLightboxItem(currentIndex);
    }
    if (e.key === "ArrowRight" && currentIndex < currentItemsList.length - 1) {
      currentIndex++;
      showLightboxItem(currentIndex);
    }
  });

  // Mobile Touch Swipe Gesture Support
  let touchStartX = 0;
  let touchStartY = 0;

  overlay.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  overlay.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    // Detect horizontal swipe if horizontal movement is greater than vertical
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0 && currentIndex > 0) {
        // Swipe Right -> Previous
        currentIndex--;
        showLightboxItem(currentIndex);
      } else if (diffX < 0 && currentIndex < currentItemsList.length - 1) {
        // Swipe Left -> Next
        currentIndex++;
        showLightboxItem(currentIndex);
      }
    }
  }, { passive: true });
}

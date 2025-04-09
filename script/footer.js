const toggleFooter = (button) => {
    let footerItem = button.closest(".footer-item");
    let categories = footerItem.querySelector(".footer-item-categories");
  
    if (categories.style.maxHeight) {
      categories.style.maxHeight = null;
    } else {
      categories.style.maxHeight = categories.scrollHeight + "px";
    }
  }
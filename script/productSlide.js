const createProduct = () => {
    const div = document.createElement("div");
    div.className = "product-card";
  
    div.innerHTML = `
              <span class="product-new">NOVO</span>
              <div>
                <img src="./assets/product.png" />
              </div>
              <div class="product-text">
                <h3>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h3>
                <div class="product-price">
                  <div>
                    <p class="product-original-price">R$ 100,00</p>
                    <p class="product-discounted-price">R$79,90</p>
                  </div>
                  <span class="product-discount-percentage">10% OFF</span>
                </div>
                <p class="product-installment">
                  <span>Ou em até </span>
                  <span>10x de R$ 7,90</span>
                </p>
                <button class="custom-button">Comprar</button>
              </div>
      `;
  
    return div;
  }
  
  const productContainers = document.getElementsByClassName("product-container");
  
  Array.from(productContainers).forEach(productContainer => {
    for (let i = 0; i < 13; i++) {
      const div = createProduct();
      productContainer.appendChild(div);
    }
  
    let dots = Math.ceil(productContainer.scrollWidth / productContainer.offsetWidth);
    let dotsContainer = productContainer.parentElement.querySelector(".product-dot");
    if (dotsContainer) {
      dotsContainer.innerHTML = "";
  
      for (let i = 0; i < dots; i++) {
        const div = document.createElement("div");
        div.className = "dot";
  
        if (i === 0) {
          div.classList.add("active-dot");
        }
  
        dotsContainer.appendChild(div);
      }
    }
  });
  
  const moveSlide = (button, direcao) => {
    let container = button.parentElement.querySelector(".product-container");
    let productWidth = container.querySelector(".product-card").offsetWidth + 8;
    // container.scrollLeft += productWidth * direcao;
  
    container.scrollLeft += container.offsetWidth * direcao;
  
    updateActiveDot(container);
  }
  
  const updateActiveDot = (container) => {
    let dotsContainer = container.parentElement.querySelector(".product-dot");
    if (!dotsContainer) return;
  
    let dots = dotsContainer.querySelectorAll(".dot");
    let index = Math.round(container.scrollLeft / container.offsetWidth);
  
    dots.forEach(dot => dot.classList.remove("active-dot"));
    if (dots[index]) {
      dots[index].classList.add("active-dot");
    }
  };
  
  document.querySelectorAll(".product-container").forEach(container => {
    container.addEventListener("scroll", () => updateActiveDot(container));
  });
const categories = ["Departamento", "Departamento", "Departamento", "Departamento", "Departamento", "Departamento"];

const container = document.getElementById("category");

categories.forEach(category => {
  const a = document.createElement("a");
  a.textContent = category;
  a.href = "/";
  container.appendChild(a);
});


const createProduct = () => {
  const div = document.createElement("div");
  div.className = "product-card";

  div.innerHTML = `
            <span class="product-new">NOVO</span>
            <div>
              <img src="/assets/product.png" />
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
  for (let i = 0; i < 10; i++) {
    const div = createProduct();
    productContainer.appendChild(div);
  }
});

const toggleFooter = (button) => {
  let footerItem = button.closest(".footer-item");
  let categories = footerItem.querySelector(".footer-item-categories");

  if (categories.style.maxHeight) {
    categories.style.maxHeight = null; 
  } else {
    categories.style.maxHeight = categories.scrollHeight + "px"; 
  }
}
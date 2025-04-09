const categories = [
  {
    title: "Eletrônicos",
    subCategory: [
      "Celulares",
      "Notebooks",
      "Fones de Ouvido",
      "Smartwatches",
      "TVs e Monitores",
      "Acessórios Tech",
      "Carregadores",
      "Tablets",
      "Drones",
      "Câmeras",
      "Cabos",
      "Caixas de Som"
    ]
  },
  {
    title: "Moda Masculina",
    subCategory: [
      "Camisetas",
      "Calças",
      "Tênis",
      "Acessórios",
      "Jaquetas",
      "Relógios"
    ]
  },
  {
    title: "Casa e Decoração",
    subCategory: [
      "Móveis",
      "Iluminação",
      "Camas e Colchões",
      "Cozinha",
      "Banheiro",
      "Organização"
    ]
  },
  {
    title: "Beleza e Cuidados",
    subCategory: [
      "Maquiagem",
      "Skincare",
      "Cabelos",
      "Perfumes",
      "Barbearia",
      "Dermocosméticos"
    ]
  },
  {
    title: "Esportes e Lazer",
    subCategory: [
      "Roupas Esportivas",
      "Bicicletas",
      "Equipamentos de Academia",
      "Esportes Coletivos",
      "Camping e Aventura",
      "Suplementos"
    ]
  }
];

// Containers principais
const container = document.getElementById("category");
const categoryContainer = document.getElementById("openCategory");
const subCategoryContainer = document.getElementById("subCategoryContainer");
const categoryList = document.getElementById("categoryList");
const openCategoryButton = document.getElementById("openCategoryBtn");

const createCategory = (title, id) => {
  const div = document.createElement("div");
  div.textContent = title;
  div.classList.add("subCategoryTitle");

  div.addEventListener("click", () => {
    // Verifica se a div esta com a classe active
    const isActive = div.classList.contains("active");
    // Verifica se o botão de todas as categorias esta ativo
    const isAllActive = openCategoryButton.classList.contains("active");

    // Fecha tudo antes de abrir o atual
    Array.from(subCategoryTitles).forEach(item => item.classList.remove("active"));
    subcategoryLists.forEach(sub => sub.classList.remove("show"));
    categoryItems.forEach(el => el.classList.remove("active"));

    if(isAllActive) {
      openCategoryButton.classList.remove("active");
      categoryList.classList.remove("show");
    }

    if (isActive) {
      categoryContainer.classList.remove("show");
    } else {
      categoryContainer.classList.add("show");
      div.classList.add("active");
  
      const subToShow = document.querySelector(`.subcategory-list[data-id="sub${id}"]`);
      if (subToShow) {
        subToShow.classList.add("show");
      }
    }
  });

  return div;
};

const createCategoryList = (title, id) => {
  const li = document.createElement("li");
  li.className = "category-item";
  li.dataset.id = `sub${id}`;

  li.innerHTML = `
    <p>${title}</p>
    <svg width="6" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.45948 5.03932L1.27979 8.27623C0.987123 8.57459 0.512778 8.57459 0.219501 8.27623C-0.0731669 7.97892 -0.0731669 7.49559 0.219501 7.1978L2.86978 4.49986L0.219501 1.80232C-0.0731669 1.50453 -0.0731669 1.02185 0.219501 0.723405C0.512778 0.425531 0.987123 0.425531 1.27979 0.723405L4.45948 3.96032C4.60614 4.10958 4.67943 4.3048 4.67943 4.50002C4.67943 4.69524 4.60614 4.89038 4.45948 5.03932Z" fill="currentColor"/>
    </svg>
  `;

  return li;
};

const createSubCategoryList = (subCategories, id) => {
  const div = document.createElement("div");
  div.className = "subcategory-list";
  div.dataset.id = `sub${id}`;

  const ul = document.createElement("ul");

  subCategories.forEach(subCategory => {
    const li = document.createElement("li");
    li.textContent = subCategory;
    ul.appendChild(li);
  });

  div.appendChild(ul);
  return div;
};


let subId = 1;

categories.forEach(category => {
  // Cria botão na navbar
  const dep = createCategory(category.title, subId);
  container.appendChild(dep);

  // Cria lista de categorias
  const li = createCategoryList(category.title, subId);
  categoryList.appendChild(li);

  // Cria lista de subcategorias
  const subCategory = createSubCategoryList(category.subCategory, subId);
  subCategoryContainer.appendChild(subCategory);

  subId++;
});

const categoryItems = document.querySelectorAll(".category-item");
const subcategoryLists = document.querySelectorAll(".subcategory-list");

// Abre ou fecha o menu de categorias principal
openCategoryButton.addEventListener("click", () => {
  let isOpen = false;

  //Verifica se tem alguma categoria aberta
  subcategoryLists.forEach(item => {
    if (item.classList.contains("show")) {
      isOpen = true;
    }
  });

  console.log("isOpen? :", isOpen)


  // Fecha tudo antes de abrir o atual
  Array.from(subCategoryTitles).forEach(item => item.classList.remove("active"));
  subcategoryLists.forEach(sub => sub.classList.remove("show"));
  categoryItems.forEach(el => el.classList.remove("active"));

  if(!isOpen) {
    categoryContainer.classList.toggle("show");
  }

  categoryList.classList.toggle("show");
  openCategoryButton.classList.toggle("active");

  subcategoryLists.forEach(sub => sub.classList.remove("show"));
  categoryItems.forEach(item => item.classList.remove("active"));
});

// Exibe a subcategoria correspondente ao passar o mouse
categoryItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    const targetSub = item.dataset.id;

    categoryItems.forEach(el => el.classList.remove("active"));
    item.classList.add("active");

    subcategoryLists.forEach(sub => sub.classList.remove("show"));

    const subToShow = document.querySelector(`.subcategory-list[data-id="${targetSub}"]`);
    if (subToShow) {
      subToShow.classList.add("show");
    }
  });
});

// Títulos de sub categorias na navbar
const subCategoryTitles = document.querySelectorAll(".subCategoryTitle");

let isOpen = false;

document.addEventListener("click", (event) => {
  const clickedInsideCategory =
    categoryContainer.contains(event.target) ||
    openCategoryButton.contains(event.target);

  const clickedOnSubCategoryTitle = Array.from(subCategoryTitles).some(title =>
    title.contains(event.target)
  );
  isOpen = true
  if (!clickedInsideCategory && !clickedOnSubCategoryTitle) {
    isOpen = false;
    Array.from(subCategoryTitles).forEach(item => {
      item.classList.remove('active');
    });
    categoryContainer.classList.remove("show");
    categoryList.classList.remove("show");
    openCategoryButton.classList.remove("active");

    subcategoryLists.forEach(sub => sub.classList.remove("show"));
    categoryItems.forEach(item => item.classList.remove("active"));
  }
  console.log(isOpen)
});

// document.getElementById('categoryMenu').addEventListener('mouseleave', () => {
//   subcategoryLists.forEach(sub => sub.classList.remove('show'));
// });

// **************** Criação de produtos

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

const toggleFooter = (button) => {
  let footerItem = button.closest(".footer-item");
  let categories = footerItem.querySelector(".footer-item-categories");

  if (categories.style.maxHeight) {
    categories.style.maxHeight = null;
  } else {
    categories.style.maxHeight = categories.scrollHeight + "px";
  }
}
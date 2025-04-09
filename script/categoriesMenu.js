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
  
      if (isAllActive) {
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
    let hasOpen = false;
  
    //Verifica se tem alguma categoria aberta
    subcategoryLists.forEach(item => {
      if (item.classList.contains("show")) {
        hasOpen = true;
      }
    });
  
    console.log("isOpen? :", hasOpen)
  
  
    // Fecha tudo antes de abrir o atual
    Array.from(subCategoryTitles).forEach(item => item.classList.remove("active"));
    subcategoryLists.forEach(sub => sub.classList.remove("show"));
    categoryItems.forEach(el => el.classList.remove("active"));
  
    if (!hasOpen) {
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
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
    div.className = "productCard";

    div.innerHTML = `
    <div>
        <img src="">
    </div>

    <div>
        <h3>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h3>

        <div>
            <div> 
                <p>R$ 100,00</p>
                <p>R$79,90</p>
            </div>
            <span>10% OFF</span>
        </div>

        <p>
            <span>Ou em até </span>
            <span>10x de R$ 7,90</span>
        </p>

        <button>Comprar</button>
    </div>

    `;

    return div;
}

for (let i = 0; i < 10; i++) {
    
    
}
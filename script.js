const categories = ["Departamento", "Departamento", "Departamento", "Departamento", "Departamento", "Departamento"];

const container = document.getElementById("category");

categories.forEach(category => {
    const a = document.createElement("a");
    a.textContent = category;
    a.href = "/";  
    container.appendChild(a);
});
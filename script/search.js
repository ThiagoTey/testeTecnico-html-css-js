const form = document.getElementById('searchForm');
const input = document.getElementById('searchInput');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = input.value.trim();

    if (value) {
        message.classList.add("block");
        message.textContent = `Você buscou por : ${value}`;
    } else {
        message.classList.remove("block");
    }
})

input.addEventListener('input', function () {
    const value = input.value.trim();

    if (!value) {
        message.classList.remove("block");
    }
});
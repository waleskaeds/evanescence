const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

function loadingPage(page) {
    let section = document.querySelector("#section");
    let request = new XMLHttpRequest;

    request.onreadystatechange = () => {
        if(request.readyState == 4 && request.status == 200) {
            section.innerHTML = request.response;
        }
    }
    request.open('GET', page);
    request.send();

}

document.addEventListener('DOMContentLoaded', () => {
    loadingPage('../home/home.html'); // Carrega a home automaticamente
});
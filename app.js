import { home, livereports, about } from './routes.js'

window.onload = init

const routes = {
    home,
    livereports,
    about,
}

function init() {
    document.querySelector('nav > ul').addEventListener('click', selectRoute)
    document.querySelector("#Home").click()
}

function selectRoute(event) {
    event.preventDefault();
    if (event.target.nodeName !== "A") {
        return
    }

    const outlet = document.querySelector(".link-outlet")
    routes[event.target.textContent.toLowerCase()](outlet)
}


window.addEventListener("beforeunload", function (event) {
    localStorage.clear();
})





let progress = document.createElement("progress")
let outlet = document.querySelector(".link-outlet")
 let getAjax = (url, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {

        if (xhr.readyState === 0) {
            progress.value = 0
            progress.max = 100
            progress.style.position = "absolute"
            progress.style.zIndex = "99"
            progress.id = "progress"
            setTimeout(() => { progress.value = xhr.readyState * 25; }, 500);
        }
        if (xhr.readyState === 1) {
            setTimeout(() => { progress.value = xhr.readyState * 25; }, 500);
        }
        if (xhr.readyState === 2) {
            setTimeout(() => { progress.value = xhr.readyState * 25; }, 500);
        }
        if (xhr.readyState === 3) {
            setTimeout(() => { progress.value = xhr.readyState * 25; }, 500);
        }
        if (xhr.readyState === 4 && xhr.status === 200) {
            progress.value = xhr.readyState * 25
            setTimeout(() => { progress.remove() }, 500);
        }

    }
    if (event?.target?.textContent === "Info") {
        let Card = event?.target?.parentNode.parentNode.parentNode.parentNode;
        progress.style.top = "60%"
        progress.style.right = "100px"
        progress.style.width = "150px"
        progress.style.height = "50px"
        Card.appendChild(progress)
    } else {
        progress.style.position = "absolute"
        progress.style.top = "50%"
        progress.style.right = "30%"
        progress.style.width = "550px"
        progress.style.height = "100px"
        outlet?.appendChild(progress);
    }

    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.addEventListener('load', cb);
    xhr.send()

}

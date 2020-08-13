
function home(outlet) {
    
    
    loadContent('./components/home/home.component.html', outlet)
    loadStyle("./components/home/home.component.css")
    loadScript("./components/home/home.component.js")


}


function livereports(outlet) {
    let temp = localStorage.getItem("liveReports")
    let Checkifempty = JSON.parse(temp)
    if (!Checkifempty || Checkifempty.length === 0 ) {
        alert("hey sir you forgot to choose Coins for the live report ")
        return
    }
    loadContent('./components/livereports/livereport.component.html', outlet)
    loadStyle('./components/livereports/livereport.component.css')
    loadScript('./components/livereports/livereport.component.js')

}
function about(outlet) {
    
    loadContent('./components/about/about.component.html', outlet)
    loadScript('./components/about/about.component.js')
    loadStyle('./components/about/about.component.css')
    outlet.innerHTML = "<h1>ABOUT</h1>"

}

function loadContent(url, outlet) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url)
    xhr.onload = function () {
        outlet.innerHTML = xhr.responseText;
    }
    xhr.send()

}


function loadScript(url) {
    const oldScript = document.querySelector('#dynamicScript')
    oldScript?.remove();
    const scriptTag = document.createElement('script');
    scriptTag.id = "dynamicScript"
    scriptTag.src = url;
    document.body.appendChild(scriptTag)

}

function loadStyle(url) {
    const oldStyle = document.querySelector('#dynamicStylesheet')
    oldStyle?.remove();
    let styleTag = document.createElement("link")
    styleTag.setAttribute("rel", "stylesheet")
    styleTag.setAttribute("id", "dynamicStylesheet")
    styleTag.setAttribute("type", "text/css")
    styleTag.setAttribute("href", url)
    document.head.appendChild(styleTag)

}



export { home, livereports, about}

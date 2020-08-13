// import getAjax from "./Ajax.js"
// import CreateMoreInfoFunction from "./createmoreinformationfunction.js"
// import fromlocalstorage from "./fromlocalstorage.js"
// export function infoclick() {
function infoclick() {

    function runRegular() {
        let Coinid = event?.target?.id;
        let link = "https://api.coingecko.com/api/v3/coins/" + (Coinid);
        getAjax(
            link,
            CreateMoreInfoFunction
        );

    }

    // making the if else of local storage stuff and open or closing the div that conatian the 
    // more information this is a little bit complicated boolean stuff

    let informationDiv = event.target.parentNode.nextSibling.nextSibling;
    let temp = localStorage.getItem("all")
    if (temp === null && informationDiv.className === "lessinfo") {
        runRegular();
    } else if (temp !== null && informationDiv.className === "lessinfo") {
        let Coinid = event.target.id;
        let Coins = JSON.parse(temp)
        const filteredItems = Coins.filter((item) => { return item.id === Coinid })
        if (filteredItems.length === 0 && informationDiv.className === "lessinfo") {
            runRegular();
        } else if (informationDiv.className === "lessinfo") {
            fromlocalstorage(filteredItems)
        }
        else if (informationDiv.className === "Moreinfo") {
            informationDiv.className = "lessinfo"
            setTimeout(() => { informationDiv.textContent = "" }, 3000);
        }
    } else if (informationDiv.className === "Moreinfo") {
        informationDiv.className = "lessinfo"
        setTimeout(() => { informationDiv.textContent = "" }, 3000);
    }

}
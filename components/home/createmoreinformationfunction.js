function CreateMoreInfoFunction() {
    let temp = localStorage.getItem("all");
    let Coins = JSON.parse(temp)
    if (Coins === null) {
        Coins = []
    }
    let CoinData = this.response;
    let moreInfoELEMENT = document.getElementById(CoinData.id);

    console.log(moreInfoELEMENT.parentNode.nextSibling.nextSibling)
    const info = ` 
                  <img src =   ${ CoinData.image.small} width = 50px > <br>
                   USD Value: ${ CoinData.market_data.current_price.usd}&#36; <br>
                   EUR Value: ${ CoinData.market_data.current_price.eur}&#8364 <br>
                   ILS Value: ${ CoinData.market_data.current_price.ils}&#8362; <br>
                    `;


    let localstorageCoin = new Object();
    localstorageCoin["id"] = `${CoinData.id}`;
    localstorageCoin["url"] = `${CoinData.image.small}`;
    localstorageCoin["usd"] = `${CoinData.market_data.current_price.usd}`;
    localstorageCoin["eur"] = `${CoinData.market_data.current_price.eur}`;
    localstorageCoin["ils"] = `${CoinData.market_data.current_price.ils}`;


    console.log(localstorageCoin)

    Coins.push(localstorageCoin)
    localStorage.setItem("all", JSON.stringify(Coins));

    // setting the time limit of 2 minitues to use the information given
    setTimeout(() => { 
        localStorage.removeItem("all");
        const filteredItems = Coins.filter((item) => { return item.id !== CoinData.id })
        localStorage.setItem("all" , JSON.stringify(filteredItems))
     }, 120000);

    let moreInfoDiv = moreInfoELEMENT.parentNode.nextSibling.nextSibling;
    moreInfoDiv.innerHTML = info;
    moreInfoDiv.className = "Moreinfo"
}



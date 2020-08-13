function fromlocalstorage(filteredItems) {
    let CoinData = filteredItems[0];
    let moreInfoELEMENT = document.getElementById(CoinData.id);
    const info = ` 
                  <img src =   ${ CoinData.url} width = 50px > <br>
                   USD Value: ${ CoinData.usd}&#36; <br>
                   EUR Value: ${ CoinData.eur}&#8364 <br>
                   ILS Value: ${ CoinData.ils}&#8362; <br>
                    `;
    let moreInfoDiv = moreInfoELEMENT.parentNode.nextSibling.nextSibling;
    moreInfoDiv.innerHTML = info;
    moreInfoDiv.className = "Moreinfo"
}

// export default fromlocalstorage
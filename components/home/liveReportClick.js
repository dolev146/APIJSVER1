function liveReportClick() {

    let temp = localStorage.getItem("liveReports")
    // checking if local storage is empty or not
    if (!temp) {
        checkIfTheCoinIsInsideLocalStorage()
    } else {

        // checking if we have Coins in local storage
        let LiveReportsArray = [];
        let tempForSecoundPress = localStorage.getItem("liveReports")
        LiveReportsArray = JSON.parse(tempForSecoundPress)
        const filteredItems = LiveReportsArray.filter((item) => {
            return item.coinSymbol === event.target.previousElementSibling.dataset.coinSymbol
        })
        const filteredItemsForTheSecoundPress = LiveReportsArray.filter((item) => {
            return item.coinSymbol !== event.target.previousElementSibling.dataset.coinSymbol
        })

        // if this is the secound press we get it out of the array
        if (filteredItems.length > 0) {
            LiveReportsArray = [...filteredItemsForTheSecoundPress]
            localStorage.setItem("liveReports", JSON.stringify(LiveReportsArray))
        }
        // if it is the first press so
        else {
            //checking if we crossed the limit of 5 coins
            if (LiveReportsArray.length === 5) {
                // when we reach 5 coin we need to tpen the modal
                let togglefirst = document.querySelector(`#${event.target.previousElementSibling.id}`)
                if (togglefirst.checked === false) {
                    event.preventDefault()
                }
                // setting the variables
                let sixCoin = {
                    coinId: event.target.previousElementSibling.dataset.coinId,
                    coinSymbol: event.target.previousElementSibling.dataset.coinSymbol,
                    firstToggle: event.target.previousElementSibling.id
                }
                localStorage.setItem("theSixCoin", JSON.stringify(sixCoin))

                let temp = localStorage.getItem("liveReports")
                let CoinNames = [...JSON.parse(temp)]
                let CoinsforCloseBtn = [...JSON.parse(temp)]
                ShowingModalToTheUser(CoinNames)
                $(`.modal-body`).on("click", function (e) {


                    //here we have a problem
                    if (event.target.textContent === "Remove") {
                        let tempCoin = localStorage.getItem("liveReports")
                        CoinNames = JSON.parse(tempCoin)
                        let togglesecound = document.querySelector(`#${event.target.previousElementSibling.id}`)
                        //checking is this is the first press on the secound toggle
                        if (togglesecound.checked === false) {
                            let selectedCoinToremove = CoinNames.filter((item) => {
                                return item.coinSymbol === event.target.previousElementSibling.dataset.coinSymbol
                            })
                            // to filter out the coin to remove
                            const filteredAfterRemove = CoinNames.filter((item) => {
                                return item.coinSymbol !== selectedCoinToremove[0].coinSymbol
                            })
                            CoinNames = [...filteredAfterRemove]
                            document.querySelector(`#${selectedCoinToremove[0].firstToggle}`).checked = false
                            // to know if i have the six coin already 
                            let temp3 = localStorage.getItem("theSixCoin")
                            let TheSixCoin = JSON.parse(temp3)
                            let filtersixCoin = CoinNames.filter((item) => {
                                return item.coinSymbol === TheSixCoin.coinSymbol
                            })
                            //if i already have it inside CoinNames so i dont push it again
                            if (filtersixCoin.length > 0) {
                                //without pushing iside the Six Coin
                                localStorage.setItem("liveReports", JSON.stringify(CoinNames))
                                return
                            }
                            else {
                                // we need to push inside the Six coin here
                                CoinNames.push(TheSixCoin)
                                localStorage.setItem("liveReports", JSON.stringify(CoinNames))
                            }
                            //if we are on the secound press on the toggle button
                        } else {
                            let temp3 = localStorage.getItem("theSixCoin")
                            let TheSixCoin = JSON.parse(temp3)
                            const filteredName = CoinNames.filter((item) => {
                                return item.coinSymbol !== TheSixCoin.coinSymbol
                            })
                            let insertTheCoinBack = {
                                coinId: `${event.target.previousElementSibling.dataset.coinId}`,
                                coinSymbol: `${event.target.previousElementSibling.dataset.coinSymbol}`,
                                firstToggle: `${event.target.previousElementSibling.dataset.firstToggle}`
                            }
                            CoinNames = [...filteredName]
                            CoinNames.push(insertTheCoinBack)
                            localStorage.setItem("liveReports", JSON.stringify(CoinNames))
                        }
                    }
                    //evreything works fine for the live report on click
                });

                document.querySelector("#SaveChanges").addEventListener("click", () => {
                    CoinNames.forEach((checkbox) => {
                        document.querySelector(`#${checkbox.firstToggle}`).checked = true
                    })
                    localStorage.setItem("liveReports", JSON.stringify(CoinNames))
                })
                document.querySelector("#CloseBtn").addEventListener("click", () => {
                    let temp3 = localStorage.getItem("theSixCoin")
                    let TheSixCoin = JSON.parse(temp3)
                    document.querySelector(`#${TheSixCoin.firstToggle}`).checked = false
                    CoinsforCloseBtn.forEach((checkbox) => {
                        document.querySelector(`#${checkbox.firstToggle}`).checked = true
                    })
                    CoinNames = [...CoinsforCloseBtn]
                    localStorage.setItem("liveReports", JSON.stringify(CoinsforCloseBtn))
                })
                return
            }
            let CoinObj = {
                coinId: event.target.previousElementSibling.dataset.coinId,
                coinSymbol: event.target.previousElementSibling.dataset.coinSymbol,
                firstToggle: event.target.previousElementSibling.id
            }
            LiveReportsArray.push(CoinObj)
            localStorage.setItem("liveReports", JSON.stringify(LiveReportsArray))
        }
    }
}





function checkIfTheCoinIsInsideLocalStorage() {
    //if loacl storage is empty we do the frist Coin!
    let LiveReportsArray = [];
    let FirstCoinObj = {
        coinId: event.target.previousElementSibling.dataset.coinId,
        coinSymbol: event.target.previousElementSibling.dataset.coinSymbol,
        firstToggle: event.target.previousElementSibling.id
    }

    LiveReportsArray.push(FirstCoinObj)
    localStorage.setItem("liveReports", JSON.stringify(LiveReportsArray))
}

function ShowingModalToTheUser(CoinNames) {

    let mymodalEl = document.querySelector(".modal-body")
    let listItem = CoinNames.map((Coin) => `
                <div style="display:flex;justify-content:space-between;">
                <h4>${CoinNames.indexOf(Coin) + 1}. ${Coin.coinSymbol.toUpperCase()}</h4>  

                <div class="custom-control custom-switch">
                <input type="checkbox" data-first-toggle="${Coin.firstToggle}" data-coin-symbol="${Coin.coinSymbol}"  class="custom-control-input" id="CustomSwitch${CoinNames.indexOf(Coin) + 1}" data-coin-id="${Coin.coinId}" unchecked >
                <label class="custom-control-label"  for="CustomSwitch${CoinNames.indexOf(Coin) + 1}" style="color:black;">Remove</label>
                </div> 

                </div>
                ` )
    mymodalEl.innerHTML = listItem;
    $("#mymodal").modal('show');

}
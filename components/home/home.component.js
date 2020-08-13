

getAjax(
    "https://api.coingecko.com/api/v3/coins",
    create100coins
);


document.querySelector("#homeContainer").addEventListener("click", function () {
    if (event.target.textContent === "Info") { infoclick() }
    if (event.target.textContent === "LiveReport") { liveReportClick() }
})



toSearch()
function toSearch() {
    document.querySelector("#searchBtn").addEventListener("click", searchCoin);
}

function searchCoin(event) {
    

    function showAllDiv() {
        let allDivs = document.querySelectorAll(".card");
        for (let i = 0; i < allDivs.length; i++) {
            allDivs[i].style.display = "flex";
        }
    }



    function hideAllDiv(id) {
        let allDivs = document.querySelectorAll(".card");

        for (let i = 0; i < allDivs.length; i++) {
            if (allDivs[i].firstElementChild.innerHTML === id) {
                allDivs[i].style.display = "flex";
            } else {
                allDivs[i].style.display = "none";
            }
        }
    }



    let CoinsId;
    let input = document.querySelector("#searchInput").value.toUpperCase();
    event.preventDefault();

    document.querySelectorAll(".card-header").forEach(function (val)  {
        if (input === val.innerHTML) {
            CoinsId = val.innerHTML;
            hideAllDiv(CoinsId);
        }
        if (input === "") {
            showAllDiv();
        }
    });




}



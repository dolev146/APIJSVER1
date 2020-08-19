

function create100coins(){
    let coins = this.response.slice(0, 100);
    let cards = coins.map(
        (coin) => `
        <div class="card bg-light mb-3" style="max-width: 20rem; color:grey;">
                   <div class="card-header">${coin.symbol.toUpperCase()}</div>
                   <div class="card-body" style="text-align: center;">
                   <div>
                     <h4 class="card-title"> symbol : ${coin.symbol.toUpperCase()}</h4>
                     <p class="card-text"> name :${coin.name}.</p>
                   </div>
                 <div>

                 <div class="LiveReportsAndMoreInfoContainer" >

                 <button type="button" class="btn btn-info disabled" id="${coin.id}">Info</button>

                <div class="custom-control custom-switch">
                <input type="checkbox" data-coin-id="${coin.id}" data-coin-symbol="${coin.symbol}"  class="custom-control-input" id="customswitch${coins.indexOf(coin)}" unchecked >
                <label class="custom-control-label"  for="customswitch${coins.indexOf(coin)}">LiveReport</label>
                </div>
        
                 </div>


                <div class="lessinfo"></div>
        
                </div>
        </div>
        </div>
        `
    );
    let homeContainer = document.querySelector("#homeContainer")

    if (homeContainer) {
        homeContainer.innerHTML = cards.join("");
  }
  
  let tempForBackClick = localStorage.getItem("liveReports")
  if (tempForBackClick) {
    let CoinsToActive = JSON.parse(tempForBackClick)
    CoinsToActive.forEach((item) => {
      document.querySelector(`#${item.firstToggle}`).checked = true
    })
  }
}



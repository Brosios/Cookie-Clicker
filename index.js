(() => {

    var totalNumberOfCookies = 0
    var autoAddAmount = 1
    var priceOptionOne = 20
    var looop = window.setInterval(autoAdd, 1000)

    document.getElementById('numbers').innerHTML = `${totalNumberOfCookies} Cookies`
    document.getElementById('upgradeLevel').innerHTML = `${autoAddAmount} CpS`

    function autoAdd() {
        totalNumberOfCookies += autoAddAmount
        document.getElementById('numbers').innerHTML = `${totalNumberOfCookies} Cookies`
    }

    document.getElementById("cookie").addEventListener("click", () => {
        totalNumberOfCookies++
        document.getElementById('numbers').innerHTML = `${totalNumberOfCookies} Cookies`
    })

    document.getElementById("optionone").addEventListener("click", () => {
        if(totalNumberOfCookies >= priceOptionOne) {
            autoAddAmount++
            totalNumberOfCookies -= priceOptionOne
            priceOptionOne = Math.floor(priceOptionOne * 1.3)
            document.getElementById('price').innerHTML = `${priceOptionOne} Cookies`
            document.getElementById('upgradeLevel').innerHTML = `${autoAddAmount} CpS`
            document.getElementById('numbers').innerHTML = `${totalNumberOfCookies} Cookies`
        }
    })



})();

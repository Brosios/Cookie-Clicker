(() => {

    const galleryCookies = [
        './img/cook1.png',
        './img/cook2.png',
        './img/cook3.png',
        './img/cook4.png',
        './img/cook5.png',
        './img/cook6.png',
        './img/cook7.png',
        './img/cook8.png',
        './img/cook9.png',
        './img/cook10.png',
        './img/cook11.png',
        './img/cook12.png',
        './img/cook13.png',
        './img/cook14.png'
    ]
// ------------------------------------------------------------

    const breakPointsGallery = [
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        800,
        900,
        1000,
        1100,
        1200,
        1300,
        1400
    ]
// ------------------------------------------------------------

// Variables
    var galleryIndex = 0
    var totalNumberOfCookies = 0
    var autoAddAmount = 0
    var clickAddAmount = 1
    var crackingAmount = 0
    var priceUpgrade = 30
    var priceAutoClick = 500
    var priceBoost = 10000
    var loopAutoAdd = window.setInterval(autoAdd, 1000)
    var loopICanBuy = window.setInterval(iCanBuy, 10)
    var loopSave = window.setInterval(saveAll, 10000)

// ------------------------------------------------------------

// 
    document.getElementById('numbers').innerHTML = `${totalNumberOfCookies} Cookies`
    document.getElementById('upgradeLevel').innerHTML = `${autoAddAmount} CpS`
// ------------------------------------------------------------

window.onload = function() {
    confirm('Do you wanna start where you left off?') ? load() : null
  };

//
    function autoAdd() {
        totalNumberOfCookies += autoAddAmount
        document.getElementById('numbers').innerHTML = `${totalNumberOfCookies} Cookies`
        document.title = `${totalNumberOfCookies} Cookies`
    }
// ------------------------------------------------------------

    function iCanBuy() {
        totalNumberOfCookies >= priceUpgrade ? document.getElementById('price-up').style.color = '#87d37c' : document.getElementById('price-up').style.color = '#d1953f'
        totalNumberOfCookies >= priceAutoClick ? document.getElementById('price-auto').style.color = '#87d37c' : document.getElementById('price-auto').style.color = '#d1953f'
        totalNumberOfCookies >= priceBoost ? document.getElementById('price-boost').style.color = '#87d37c' : document.getElementById('price-boost').style.color = '#d1953f' 
    }

    function saveAll() {
        localStorage.setItem('totalNumberOfCookies', JSON.stringify(totalNumberOfCookies))
    }

    function load() {
        totalNumberOfCookies = parseInt(localStorage.getItem('totalNumberOfCookies'))
        document.getElementById('numbers').innerHTML = `${totalNumberOfCookies} Cookies`
    }

//
    document.getElementById("cookie").addEventListener("click", () => {
        totalNumberOfCookies += clickAddAmount
        crackingAmount++
        if (crackingAmount == breakPointsGallery[galleryIndex]) {
            galleryIndex++
            document.getElementById('pictureCookie').setAttribute('src', galleryCookies[galleryIndex])  
        }
        if (galleryIndex == galleryCookies.length) {
            galleryIndex = 0
            crackingAmount = 0
            document.getElementById('pictureCookie').setAttribute('src', galleryCookies[galleryIndex])
        }
        
        document.getElementById('numbers').innerHTML = `${totalNumberOfCookies} Cookies`
    })
// ------------------------------------------------------------

//
    document.getElementById("optionone").addEventListener("click", () => {
        load()
    })

    document.getElementById('save').addEventListener('click', () => {
        saveAll()
    })

    document.getElementById("up-btn").addEventListener("click", () => {
        if(totalNumberOfCookies >= priceUpgrade) {
            clickAddAmount++
            totalNumberOfCookies -= priceUpgrade
            priceUpgrade = Math.floor(priceUpgrade * 1.3)
            document.getElementById('price-up').innerHTML = `${priceUpgrade}`
            document.getElementById('numbers').innerHTML = `${totalNumberOfCookies} Cookies`
        }
    })

    document.getElementById('up-btn').onmouseup = function () {

    }

    document.getElementById("buy-btn").addEventListener("click", () => {
        if(totalNumberOfCookies >= priceAutoClick) {
            autoAddAmount++
            totalNumberOfCookies -= priceAutoClick
            priceAutoClick = Math.floor(priceAutoClick * 1.6)
            document.getElementById('price-auto').innerHTML = `${priceAutoClick}`
            document.getElementById('numbers').innerHTML = `${totalNumberOfCookies} Cookies`
            document.getElementById('upgradeLevel').innerHTML = `${autoAddAmount} CpS`
        }
    })

    document.getElementById("buy1btn").addEventListener("click", () => {
        if(totalNumberOfCookies >= priceBoost) {
            clickAddAmount *= 2
            totalNumberOfCookies -= priceBoost
            priceBoost = Math.floor(priceBoost * 2)
            document.getElementById('price-boost').innerHTML = `${priceBoost}`
            document.getElementById('numbers').innerHTML = `${totalNumberOfCookies} Cookies`
        }
    })



})();
// ------------------------------------------------------------
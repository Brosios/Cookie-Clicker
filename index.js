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
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14
    ]
// ------------------------------------------------------------

// Variables
    var galleryIndex = 0
    var totalNumberOfCookies = 0
    var autoAddAmount = 1
    var crackingAmount = 0
    var priceOptionOne = 20
    var looop = window.setInterval(autoAdd, 1000)

// ------------------------------------------------------------

// 
    document.getElementById('numbers').innerHTML = `${totalNumberOfCookies} Cookies`
    document.getElementById('upgradeLevel').innerHTML = `${autoAddAmount} CpS`
// ------------------------------------------------------------

//
    function autoAdd() {
        totalNumberOfCookies += autoAddAmount
        document.getElementById('numbers').innerHTML = `${totalNumberOfCookies} Cookies`
    }
// ------------------------------------------------------------

//
    document.getElementById("cookie").addEventListener("click", () => {
        totalNumberOfCookies++
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
// ------------------------------------------------------------
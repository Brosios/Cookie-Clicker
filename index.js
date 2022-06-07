(() => {

    const galleryCookies = [
        'pictures/cookie1.jpg',
        'pictures/cookie2.jpg',
        'pictures/cookie3.jpg',
        'pictures/cookie4.jpg',
        'pictures/cookie5.jpg',
        'pictures/cookie6.jpg',
        'pictures/cookie7.jpg',
        'pictures/cookie8.jpg',
        'pictures/cookie9.jpg',
        'pictures/cookie10.jpg',
        'pictures/cookie11.jpg'
    ]
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
        11
    ]
    var galleryIndex = 0
    var totalNumberOfCookies = 0
    var autoAddAmount = 1
    var crackingAmount = 0
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

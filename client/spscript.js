const liOne = document.querySelector('#btn1')
const liTwo = document.querySelector('#btn2')
const liThree = document.querySelector('#btn3')
const liFour = document.querySelector('#btn4')
const liFive = document.querySelector('#btn5')
const liSix = document.querySelector('#btn6')
const liSeven = document.querySelector('#btn7')
const liEight = document.querySelector('#btn8')
const liNine = document.querySelector('#btn9')

async function images() {
    let response = await axios.get(
        `http://localhost:3001/bikes`
    )
    let bikesArray = response.data
    for (i=0; i<bikesArray.length; i++) {
        let image = bikesArray[i].image
        let price = bikesArray[i].price
        let name = bikesArray[i].name
        if (i === 0) {
            liOne.innerHTML= `<p>${name}</p><br><img src=${image} style="max-width: 150px; max-height: 100px;"><p>$${price}</p>`
        } else if (i === 1) {
            liTwo.innerHTML= `<p>${name}</p><br><img src=${image} style="max-width: 150px; max-height: 100px;"><p>$${price}</p>`
        } else if (i === 2) {
            liThree.innerHTML= `<p>${name}</p><br><img src=${image} style="max-width: 150px; max-height: 100px;"><p>$${price}</p>`
        } else if (i === 3) {
            liFour.innerHTML= `<p>${name}</p><br><img src=${image} style="max-width: 150px; max-height: 100px;"><p>$${price}</p>`
        } else if (i === 4) {
            liFive.innerHTML= `<p>${name}</p><br><img src=${image} style="max-width: 150px; max-height: 100px;"><p>$${price}</p>`
        } else if (i === 5) {
            liSix.innerHTML= `<p>${name}</p><br><img src=${image} style="max-width: 150px; max-height: 100px;"><p>$${price}</p>`
        } else if (i === 6) {
            liSeven.innerHTML= `<p>${name}</p><br><img src=${image} style="max-width: 150px; max-height: 100px;"><p>$${price}</p>`
        } else if (i === 7) {
            liEight.innerHTML= `<p>${name}</p><br><img src=${image} style="max-width: 150px; max-height: 100px;"><p>$${price}</p>`
        } else if (i === 8) {
            liNine.innerHTML= `<p>${name}</p><br><img src=${image} style="max-width: 150px; max-height: 100px;"><p>$${price}</p>`
        }
    }
}

images()
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
        `https://localhost:3001/bikes`
    )
    let bikesArray = response
    console.log (bikesArray)
    // for (i=0; i<bikesArray.length; i++) {

    // }
}

images()
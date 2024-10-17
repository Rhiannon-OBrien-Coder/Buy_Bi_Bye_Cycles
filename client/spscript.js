const listings = document.querySelector('.listings')

async function images() {
    let response = await axios.get(`http://localhost:3001/bikes`)
    let bikeData = response.data

    for (i=0; i<bikeData.length; i++) {
        let image = bikeData[i].image
        let price = bikeData[i].price
        let name = bikeData[i].name

        let bikeCard = document.createElement('button')
        bikeCard.innerHTML = `<p>${name}</p><br><img src=${image}><p>$${price}</p>`
        listings.appendChild(bikeCard)
    }
}

images()
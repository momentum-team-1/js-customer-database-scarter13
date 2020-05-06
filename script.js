// items you will need:
//  Name as an h2
// email
// address, two lines
// date of birth
// customer since

// for (let customer of customers) {
//     // console.log (customer)
//     let dude = customers [0]
//     console.log (dude.picture.large)
// }


function renderPageContent () {
    let targetElement = document.querySelector(".profiles")
    for (let customer of customers) {
        let listItemElement = document.createElement("div")
        listItemElement.innerHTML = `<img src=${customer.picture.large}>`
        // console.log (listItemElement.innerHTML)
        // console.log (listItemElement)
        listItemElement.appendChild(createNameElement(customer.name.first + " " + customer.name.last))
        listItemElement.appendChild(createEmailElement(customer.email))
        listItemElement.appendChild(createAddressLineOneElement (customer.location.street))
        targetElement.appendChild(listItemElement)
    }
}

function createImageElement (picture) {
    return `<img src=$(picture)>`
}

function createNameElement (name) {
    let nameEl = document.createElement("h3")   
    nameEl.innerText = `${name}`
    console.log (nameEl)
    return nameEl
}
function createEmailElement (email) {
    let emailEl = document.createElement("p")   
    emailEl.innerText = `${email}`
    return emailEl
}

function createAddressLineOneElement (addressOne) {
    let AddOneEl = document.createElement("p")
    AddOneEl.innerText = `${addressOne}`
    return AddOneEl
}

renderPageContent ()
